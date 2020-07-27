import React from "react";
import Categories from "./achievements.json";
import AchievementCount from "../../common/achievements/AchievementCount";
import Achievements from "../../common/achievements/Achievements";

export default () => (
  <div>
    <h2>
      Halo: Combat Evolved
      <AchievementCount className="float-right" categories={Categories} />
    </h2>

    <Achievements categories={Categories} />
  </div>
);
