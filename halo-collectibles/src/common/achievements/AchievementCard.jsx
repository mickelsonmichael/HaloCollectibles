import React from "react";
import AchievementProgress from "./AchievementProgress";
import { MdCheckCircle } from "react-icons/md";
import "./achievements.css";

export default ({ achievement }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-card__title">{achievement.name}</div>
      <span className="achievement-card__score">
        {achievement.isComplete && <MdCheckCircle size={15} />}
        {achievement.score}
      </span>
      <div className="achievement-card__description">
        {achievement.description}
      </div>
      <div className="achievement-card__progress">
        <AchievementProgress achievement={achievement} />
      </div>
    </div>
  );
};
