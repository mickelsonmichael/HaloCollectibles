import React from "react";

const AchievementCount = ({ categories, className }) => {
  const numberOfAchievements = categories.reduce(
    (sum, cat) => cat.achievements.length + sum,
    0
  );

  return (
    <span className={className}>
      {numberOfAchievements} Possible Achievements
    </span>
  );
};

export default AchievementCount;
