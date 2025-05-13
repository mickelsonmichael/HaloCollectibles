import { NextResponse } from "next/server";

import UserAchievement from "@/models/UserAchievement";

type GetAchievementsResponse = {
    achievements: UserAchievement[];
}

export const GET = async (): Promise<NextResponse<GetAchievementsResponse>> => {
    return NextResponse.json({
        achievements: [
            {
                name: "Life Story"
            }
        ]
    });
}
