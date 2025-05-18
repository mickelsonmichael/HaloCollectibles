interface XboxAchievement {
    id: string;
    name: string;
    progressState: "NotStarted" | "Achieved" | "InProgress";
    description: string;
    isSecret: boolean;
    progression: {
        timeUnlocked: string;
    };
    mediaAssets: {
        name: string;
        type: "Icon";
        url: string;
    }
}

export default XboxAchievement;
