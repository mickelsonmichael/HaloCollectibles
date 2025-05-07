import React from "react";
import AchievementProgress from "./AchievementProgress";
import { MdCheckCircle, MdLink } from "react-icons/md";
import "./achievements.css";

export default ({ achievement }) => {
  const completedDate = achievement.completedDate
    ? new Date(achievement.completedDate)
    : null;

  return (
    <div className="achievement-card">
      <div className="achievement-card__header">
        <div className="achievement-card__title">{achievement.name}</div>
        <span className="achievement-card__score">
          {achievement.isComplete && <MdCheckCircle size={15} />}
          {achievement.score}
        </span>
      </div>
      <div className="achievement-card__description">
        {achievement.description}
        {achievement.link && (
          <span>
            {" "}
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink />
              Link
            </a>
          </span>
        )}
        {completedDate && (
          <div className="text-muted">
            Unlocked: {completedDate.getFullYear()}-
            {(completedDate.getMonth() + 1).toString().padStart(2, "0")}-
            {completedDate.getDate().toString().padStart(2, "0")}
          </div>
        )}
      </div>
      <div className="achievement-card__progress">
        <AchievementProgress achievement={achievement} />
      </div>
    </div>
  );
};
