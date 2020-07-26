import React from "react";
import { getAchievements, getGamertag } from "../../utilities/storage";
import { Alert } from "reactstrap";
import Achievements from "../../common/Achievements";
import AchievementCount from "../../common/AchievementCount";

export default () => {
  const gamertag = getGamertag();

  if (!gamertag) {
    return (
      <Alert color="info">
        You are not logged in. Use the login form in the header
      </Alert>
    );
  }

  const achievements = getAchievements().filter((x) => x.isComplete);

  if (achievements.length === 0) {
    return (
      <Alert color="warning">
        You have no achievements complete yet! Get started!
      </Alert>
    );
  }

  const categories = [
    {
      title: "all",
      achievements: achievements,
    },
  ];

  return (
    <div>
      <h2>
        Unlocked Achievements for: {gamertag}
        <AchievementCount categories={categories} className="float-right" />
      </h2>
      <Achievements categories={categories} hideCompleted={false} />
    </div>
  );
};
