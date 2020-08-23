import React from "react";
import Game from "../../common/Game";
import Halo4Achievements from "./halo4achievements.json";
import Halo4Terminals from "./halo4terminals.json";

const Halo4 = () => (
  <Game
    name="Halo 4"
    achievements={Halo4Achievements}
    terminals={Halo4Terminals}
  />
);

export default Halo4;
