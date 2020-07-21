import React from "react";
import Achievements from "../../common/Achievements";
import Data from "./achievements.json";

const Halo3 = () => {
  const categories = Data.categories;

  return (
    <div>
      <h2>Halo 3</h2>

      <Achievements categories={categories} />
    </div>
  );
};

export default Halo3;
