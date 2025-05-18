interface Requirement {
    current: string | null;
    target: string;
    operationType: "SUM" | "MINIMUM" | "MAXIMUM";
    ruleParticipationType: "Individual";
    valueType: "Integer";
}

interface Progression {
    timeUnlocked: string;
    requirements: Requirement[];
}

interface MediaAsset {
    name: string;
    type: "Icon";
    url: string;
}

interface XboxAchievement {
    id: string;
    name: string;
    progressState: "NotStarted" | "Achieved" | "InProgress";
    description: string;
    isSecret: boolean;
    progression: Progression;
    mediaAssets: MediaAsset[]
}

const getRequirementProgress = (requirement: Requirement): boolean | [number, number] => {
    const current = requirement.current == null ? 0 : Number(requirement.current);
    const target = Number(requirement.target);

    switch (requirement.operationType)
    {
        case "MINIMUM":
            return current <= target;
        case "MAXIMUM":
            return current >= target;
        default:
        return current >= target ? true : [current, target]
    }
}

const getAchievementProgress = (achievement: XboxAchievement): boolean | [number, number] => {
    const requirements = achievement.progression.requirements;

    if (requirements.length == 1) {
        // Simple case, just one requirement
        return getRequirementProgress(requirements[0]);
    }

    const requirementsMet = requirements
        .map(getRequirementProgress)
        .filter(p => p === true);

    return requirementsMet.length >= requirements.length
        ? true
        : [requirementsMet.length, requirements.length]
}

export { getAchievementProgress };
export default XboxAchievement;
