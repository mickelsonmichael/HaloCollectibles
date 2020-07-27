import React from "react";
import AchievementCount from "../../common/achievements/AchievementCount";
import AchievementCategory from "../../common/achievements/AchievementCategory";
import { UserContext } from "../../UserContext";
import AlertMessage from "../../common/AlertMessage";

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
      <h2>
        Unlocked Achievements for {gamertag}
        <AchievementCount
          categories={[{ title: "complete", achievements: userAchievements }]}
          className="float-right"
        />
      </h2>
      <AchievementCategory achievements={userAchievements} />
    </div>
  );
};
