import React from "react";
import ReachAchievements from "./HaloReachAchievements.json";
import ReachDatapads from "./HaloReachDataPads.json";
import Game from "../../common/Game";

export default () => (
  <Game
    name="Halo: Reach"
    achievements={ReachAchievements}
    datapads={ReachDatapads}
  />
);
