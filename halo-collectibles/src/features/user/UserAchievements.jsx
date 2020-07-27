import React from "react";
import AchievementCount from "../../common/AchievementCount";
import AchievementCategory from "../../common/AchievementCategory";
import UserContext from "../../UserContext";
import AlertMessage from "../../common/AlertMessage";

export default () => {
  const { gamertag, achievements } = React.useContext(UserContext);

  if (gamertag === undefined || gamertag === "") {
    return (
      <AlertMessage color="info">
        You are not logged in. Use the login form in the header
      </AlertMessage>
    );
  }

  if (!achievements || achievements?.length === 0) {
    return (
      <AlertMessage color="warning">
        You have no achievements complete yet! Get started!
      </AlertMessage>
    );
  }

  return (
    <div>
      <h2>
        Unlocked Achievements for: {gamertag}
        <AchievementCount
          categories={{ title: "all", achievements }}
          className="float-right"
        />
      </h2>
      <AchievementCategory achievements={achievements} />
    </div>
  );
};
