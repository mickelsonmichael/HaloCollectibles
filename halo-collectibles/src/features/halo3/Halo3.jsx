import React from "react";
import Categories from "./achievements.json";
import Skulls from "./skulls.json";
import Game from "../../common/Game";

const Halo3 = () => (
  <Game achievements={Categories} skulls={Skulls} name="Halo 3" />
);

export default Halo3;
