import React from "react";
import Achievements from "../../common/Achievements";
import AchievementCount from "../../common/AchievementCount";
import Data from "./achievements.json";

const Halo3 = () => {
  const categories = Data.categories;

  return (
    <div>
      <h2>
        Halo 3
        <AchievementCount className="float-right" categories={categories} />
      </h2>

      <Achievements categories={categories} />
    </div>
  );
};

export default Halo3;
