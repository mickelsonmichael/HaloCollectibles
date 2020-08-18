import React from "react";
import Game from "../../common/Game";
import Categories from "./achievements.json";
import Skulls from "./skulls.json";

export default () => (
  <Game achievements={Categories} skulls={Skulls} name="Halo: CE" />
);
