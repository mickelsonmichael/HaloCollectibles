import { NextResponse } from "next/server";

const PUBLIC_URL = process.env.PUBLIC_URL ?? "http://localhost:3000"

export const GET = async () => {
    const redirectUrl = `${PUBLIC_URL}/achievements`;

    const response = NextResponse.redirect(redirectUrl);

    response.cookies.delete("STEAM_USER_ID");

    return response;
}
