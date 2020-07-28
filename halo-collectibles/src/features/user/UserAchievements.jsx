import React from "react";
import AchievementCount from "../../common/achievements/AchievementCount";
import AchievementCategory from "../../common/achievements/AchievementCategory";
import { UserContext } from "../../UserContext";
import AlertMessage from "../../common/AlertMessage";
import AchievementProgress from "../../common/achievements/AchievementProgress";
import { Progress } from "reactstrap";
import Achievements from "../../common/achievements/Achievements";

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

  const numCompleted = userAchievements.length;
  const total = achievements.length;
  const percentComplete = (numCompleted / total) * 100;

  return (
    <div>
      <h2>Unlocked Achievements for {gamertag}</h2>

      {percentComplete === 100 ? (
        <AlertMessage color="success">
          You have completed all achievements! Now go outside.
        </AlertMessage>
      ) : (
        <p className="text-muted">
          You have unlocked {numCompleted} of {total} Achievements across all
          games.
          <Progress color="info" value={percentComplete} />
        </p>
      )}

      <Achievements
        forceShowComplete
        categories={[{ title: "completed", achievements: userAchievements }]}
      />
    </div>
  );
};
