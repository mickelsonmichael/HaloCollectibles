import { NextResponse } from "next/server";

import { XBL_API_KEY } from "@/utilities/variables";

const xblApiUrl = "https://xbl.io/app/auth/";

export const GET = async () => {
    return NextResponse.redirect(`${xblApiUrl}/${XBL_API_KEY}`);
}
