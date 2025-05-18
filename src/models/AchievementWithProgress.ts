import Achievement from "./Achievement";

type AchievementWithProgress = Achievement & {
    progress: null | boolean | { current: number, target: number }
};

export default AchievementWithProgress;
