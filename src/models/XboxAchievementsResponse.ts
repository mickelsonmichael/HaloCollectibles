import XboxAchievement from "./XboxAchievement";

interface XboxAchievementsResponse {
    achievements: XboxAchievement[]
    version: string;
    pagingInfo: unknown;
}

export default XboxAchievementsResponse;
