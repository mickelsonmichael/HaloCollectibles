import { NextRequest, NextResponse } from "next/server";
import { authClient, steamOpenIdProvider } from "@/utilities/auth";
import { waitFor } from "@/utilities/delay";

const getTestUrl = (steamId: string) =>
    `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/
        ?appid=976730
        &key=${process.env.STEAM_API_KEY}
        &steamid=${steamId}
        &l=en-US`.replaceAll(/\s/g, "");

const PUBLIC_URL = process.env.PUBLIC_URL ?? "http://localhost:3000";

export const POST = async (request: NextRequest) => {
    const errorUrl = `${PUBLIC_URL}/error`;

    const form = await request.formData();
    const steamId = form.get("steamId")?.toString().trim();

    if (steamId == null || steamId === "") {
        return NextResponse.redirect(`${errorUrl}?message=You must enter a valid SteamID`);
    }

    const testUrl = getTestUrl(steamId);

    console.log(`Sending test request for SteamId ${steamId} to '${testUrl}'`)

    const steamIdTestResponse = await fetch(testUrl, { cache: "no-cache" });

    if (!steamIdTestResponse.ok) {
        console.debug(`SteamID authentication failed; received ${steamIdTestResponse.status} ${steamIdTestResponse.statusText}`);

        return NextResponse.redirect(`${errorUrl}?message=You entered an invalid SteamID or your steam profile is private. Please double-check and try again`);
    }

    const redirectUrl = `${PUBLIC_URL}/achievements`;

    const response = NextResponse.redirect(redirectUrl);

    response.cookies.set("STEAM_USER_ID", steamId, {
        secure: process.env.NODE_ENV === "production",
        sameSite: true
    });

    return response;
}

export const GET = async () => {

    let response: NextResponse | null = null;

    authClient.authenticate(steamOpenIdProvider, false, (error, authUrl) => {
        if (error || !authUrl) {
            response = NextResponse.json({ message: "OpenID authorization failed" }, { status: 500 });
            return;
        }

        response = NextResponse.redirect(authUrl);
    });

    console.debug("Authentication started. Waiting for response...");

    const success = await waitFor(() => response != null);

    if (!success || response == null) {
        return NextResponse.json({ message: "OpenID authorization failed. Timeout exceeded" }, { status: 500 });
    }

    return response;
}
