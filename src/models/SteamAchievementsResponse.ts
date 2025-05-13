interface SteamAchievement {
    apiname: string;
    achieved: number;
    unlocktime: number;
    name?: string;
    description?: string;
}

interface PlayerStats {
    steamId: string;
    gameName: string;
    achievements: SteamAchievement[]
    success: boolean;
}

interface SteamAchievementsResponse {
    playerstats: PlayerStats
}

export type { SteamAchievement };
export default SteamAchievementsResponse;
