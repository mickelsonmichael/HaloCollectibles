import React from "react";
import Game from "../../common/Game";
import Categories from "./achievements.json";
import Skulls from "./skulls.json";
import Terminals from "./terminals.json";

export default () => (
  <Game
    achievements={Categories}
    skulls={Skulls}
    terminals={Terminals}
    name="Halo: CE"
  />
);
