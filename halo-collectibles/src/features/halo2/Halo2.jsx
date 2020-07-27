import React from "react";
import Achievements from "../../common/achievements/Achievements";
import Categories from "./achievements.json";
import AchievementCount from "../../common/achievements/AchievementCount";

const Halo2 = () => {
  return (
    <div>
      <h2>
        Halo 2
        <AchievementCount className="float-right" categories={Categories} />
      </h2>

      <Achievements categories={Categories} />
    </div>
  );
};

export default Halo2;
