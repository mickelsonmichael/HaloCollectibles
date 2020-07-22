import React from "react";
import Achievements from "../../common/Achievements";
import Data from "./achievements.json";
import AchievementCount from "../../common/AchievementCount";

const Halo2 = () => {
  const categories = Data.categories;

  return (
    <div>
      <h2>
        Halo 2
        <AchievementCount className="float-right" categories={categories} />
      </h2>

      <Achievements categories={categories} />
    </div>
  );
};

export default Halo2;
