import React from "react";
import AchievementCount from "../../common/achievements/AchievementCount";
import Achievements from "../../common/achievements/Achievements";
import Categories from "./categories.json";

export default () => {
  return (
    <div>
      <h2>
        General and Cross-game
        <AchievementCount className="float-right" categories={Categories} />
      </h2>

      <Achievements categories={Categories} />
    </div>
  );
};
