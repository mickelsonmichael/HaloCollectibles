import React from "react";
import Categories from "./achievements.json";
import skulls from "./skulls.json";
import Game from "../../common/layout/Game";

const Halo2 = () => (
  <Game name="Halo 2" skulls={skulls} achievements={Categories} />
);

export default Halo2;
