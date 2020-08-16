import React from "react";
import { UserContext } from "../../UserContext";
import AlertMessage from "../../common/AlertMessage";
import Achievements from "../../common/achievements/Achievements";
import PlayerCard from "./PlayerCard";

export default () => {
  const { gamertag, achievements } = React.useContext(UserContext).user;

  if (!gamertag) {
    return (
      <AlertMessage color="info">
        You are not logged in. Use the login form in the header
      </AlertMessage>
    );
  }

  const userAchievements = achievements.filter((a) => a.isComplete);

  if (userAchievements.length === 0) {
    return (
      <AlertMessage color="warning">
        You have no achievements complete yet! Get started!
      </AlertMessage>
    );
  }

  return (
    <div>
      <PlayerCard
        gamertag={gamertag}
        complete={userAchievements.length}
        total={achievements.length}
      />

      <Achievements
        forceShowComplete
        categories={[{ title: "completed", achievements: userAchievements }]}
      />
    </div>
  );
};
