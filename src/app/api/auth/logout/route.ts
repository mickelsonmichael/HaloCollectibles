import { NextResponse } from "next/server";

import { PUBLIC_URL } from "@/utilities/variables";

export const GET = async () => {
    const redirectUrl = `${PUBLIC_URL}/achievements`;

    const response = NextResponse.redirect(redirectUrl);

    response.cookies.delete("STEAM_USER_ID");

    return response;
}
