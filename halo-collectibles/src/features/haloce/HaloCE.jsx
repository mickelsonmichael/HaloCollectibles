import React from "react";
import Categories from "./achievements.json";
import AchievementCount from "../../common/AchievementCount";
import Achievements from "../../common/Achievements";

export default () => (
  <div>
    <h2>
      Halo: Combat Evolved
      <AchievementCount className="float-right" categories={Categories} />
    </h2>

    <Achievements categories={Categories} />
  </div>
);
