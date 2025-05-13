import { NextRequest, NextResponse } from "next/server";

import type { SteamAchievement } from "@/models/SteamAchievementsResponse";
import type UserAchievement from "@/models/UserAchievement";
import type SteamAchievementsResponse from "@/models/SteamAchievementsResponse";

type GetAchievementsResponse = {
    achievements: UserAchievement[];
}

const toUserAchievement = (achievement: SteamAchievement): UserAchievement => ({
    name: achievement.name ?? achievement.apiname,
    unlockedTimestamp: achievement.unlocktime !== 0 ? achievement.unlocktime : null
});

export const GET = async (request: NextRequest): Promise<NextResponse<GetAchievementsResponse>> => {
    const steamIdCookie = request.cookies.get("STEAM_USER_ID");

    if (!steamIdCookie) {
        console.debug("User not authenticated, returning default list of achievements");

        return NextResponse.json({ achievements: [] });
    }

    console.log("Fetching achievements for ", steamIdCookie.value);

    const url = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=976730&key=${process.env.STEAM_API_KEY}&steamid=${steamIdCookie.value}&l=en-US`;

    const response = await fetch(url, {
        cache: "force-cache",
        next: {
            revalidate: 2 // cache result for 2 minutes
        }
    });

    if (!response.ok) {
        console.warn("Unable to fetch user achievements: ", response);

        return NextResponse.json({ achievements: [] });
    }

    const steamAchievements: SteamAchievementsResponse = await response.json();

    if (!steamAchievements.playerstats.success) {
        console.warn("Unable to fetch user achievements: ", steamAchievements);

        return NextResponse.json({ achievements: [] });
    }

    const unlockedAchievements = steamAchievements
        .playerstats
        .achievements
        .map(toUserAchievement)

    return NextResponse.json({ achievements: unlockedAchievements });
}
