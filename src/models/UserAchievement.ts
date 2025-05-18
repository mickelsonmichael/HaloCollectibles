interface UserAchievement {
    name: string;
    unlockedTimestamp: number | null;
    progress: null | boolean | {
        target: number;
        current: number;
    }
}

export default UserAchievement;
