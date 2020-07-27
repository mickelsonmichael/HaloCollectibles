import React from "react";
import Categories from "./achievements.json";
import AchievementCount from "../../common/achievements/AchievementCount";
import Achievements from "../../common/achievements/Achievements";

export default class ODST extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Halo 3: ODST
          <AchievementCount categories={Categories} className="float-right" />
        </h2>
        <Achievements categories={Categories} />
      </div>
    );
  }
}
