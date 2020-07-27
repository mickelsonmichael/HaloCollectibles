import React from "react";
import Achievements from "../../common/Achievements";
import AchievementCount from "../../common/AchievementCount";
import Categories from "./achievements.json";

const Halo3 = () => {
  return (
    <div>
      <h2>
        Halo 3
        <AchievementCount className="float-right" categories={Categories} />
      </h2>

      <Achievements categories={Categories} />
    </div>
  );
};

export default Halo3;
