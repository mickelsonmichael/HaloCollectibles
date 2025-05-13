import { NextResponse } from "next/server";
import { authClient, steamOpenIdProvider } from "@/utilities/auth";
import { waitFor } from "@/utilities/delay";

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

    if (!success) {
        return NextResponse.json({ message: "OpenID authorization failed. Timeout exceeded" }, { status: 500 });
    }

    return response;
}
