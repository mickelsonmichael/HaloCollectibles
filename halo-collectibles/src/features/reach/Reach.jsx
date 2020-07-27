import React from "react";
import Categories from "../reach/achievements.json";
import Achievements from "../../common/Achievements";
import AchievementCount from "../../common/AchievementCount";

export default () => (
  <div>
    <h2>
      Halo: Reach
      <AchievementCount className="float-right" categories={Categories} />
    </h2>

    <Achievements categories={Categories} />
  </div>
);
