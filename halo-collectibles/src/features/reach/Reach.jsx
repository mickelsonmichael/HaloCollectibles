import React from "react";
import Data from "../reach/achievements.json";
import Achievements from "../../common/Achievements";

const Reach = () => {
  const categories = Data.categories;

  return (
    <div>
      <h2>Halo: Reach</h2>

      <Achievements categories={categories} />
    </div>
  );
};

export default Reach;
