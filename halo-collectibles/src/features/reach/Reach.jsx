import React from "react";
import Data from "../reach/achievements.json";
import Achievements from "../../common/Achievements";
import AchievementCount from "../../common/AchievementCount";

const Reach = () => {
  const categories = Data.categories;

  return (
    <div>
      <h2>
        Halo: Reach
        <AchievementCount className="float-right" categories={categories} />
      </h2>

      <Achievements categories={categories} />
    </div>
  );
};

export default Reach;
