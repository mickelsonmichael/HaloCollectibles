import { PUBLIC_URL } from "@/utilities/variables";
import { NextRequest, NextResponse } from "next/server";

import { XBL_API_KEY } from "@/utilities/variables";

const CLAIM_URL = "https:xbl.io/app/claim";

export const GET = async (request: NextRequest) => {
    const params = request.nextUrl.searchParams;

    const code = params.get("code");

    if (!code) {
        console.warn("No code included on Xbox auth response");

        return NextResponse.redirect(`${PUBLIC_URL}/error?message=Authorization failed`);
    }

    const xblResponse = await fetch(CLAIM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code, app_key: XBL_API_KEY })
    });

    if (!xblResponse.ok) {
        console.warn(`Unable to complete Xbox auth, something went wrong: ${xblResponse.status}`, xblResponse.statusText);

        return NextResponse.redirect(`${PUBLIC_URL}/error?message=Authorization failed`);
    }

    const xblResponseBody = await xblResponse.json();

    const response = NextResponse.redirect(`${PUBLIC_URL}/achievements`);

    // Cookie expires in 3 months
    const cookieExpiration = new Date();
    cookieExpiration.setMonth(cookieExpiration.getMonth() + 3);

    response.cookies.set("XUID", xblResponseBody["xuid"], {
        expires: cookieExpiration
    });
    
    response.cookies.set("APP_KEY", xblResponseBody["app_key"], {
        sameSite: true,
        httpOnly: true,
        expires: cookieExpiration
    });

    return response;
}
