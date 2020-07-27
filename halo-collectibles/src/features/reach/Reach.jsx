import React from "react";
import Categories from "../reach/achievements.json";
import Achievements from "../../common/achievements/Achievements";
import AchievementCount from "../../common/achievements/AchievementCount";

export default () => (
  <div>
    <h2>
      Halo: Reach
      <AchievementCount className="float-right" categories={Categories} />
    </h2>

    <Achievements categories={Categories} />
  </div>
);
