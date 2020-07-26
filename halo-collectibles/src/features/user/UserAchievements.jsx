import React from "react";
import { getAchievements, getGamertag } from "../../utilities/storage";
import { Alert } from "reactstrap";
import Achievements from "../../common/Achievements";

export default () => {
  const gamertag = getGamertag();
  const achievements = getAchievements();

  if (!gamertag) {
    return (
      <Alert color="info">
        You are not logged in. Use the login form in the header
      </Alert>
    );
  }

  if (achievements.length === 0) {
    return (
      <Alert color="warning">You have no achievements yet! Get started!</Alert>
    );
  }

  return (
    <Achievements
      categories={[
        {
          title: "all",
          achievements: achievements.filter((x) => x.isComplete),
        },
      ]}
      hideCompleted={false}
    />
  );
};
