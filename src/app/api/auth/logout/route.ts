import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const redirectUrl = new URL(request.url).host + "/achievements";

    const response = NextResponse.redirect(redirectUrl);

    response.cookies.delete("STEAM_USER_ID");

    return response;
}
