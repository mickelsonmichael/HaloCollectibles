import React from "react";
import Categories from "./achievements.json";
import skulls from "./skulls.json";
import Game from "../../common/Game";
import Halo2Terminals from "./Halo2Terminals.json";

const Halo2 = () => (
  <Game
    name="Halo 2"
    skulls={skulls}
    achievements={Categories}
    terminals={Halo2Terminals}
  />
);

export default Halo2;
