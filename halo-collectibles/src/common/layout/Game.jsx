import React from "react";
import Achievements from "../achievements/Achievements";
import Skulls from "../skulls/Skulls";
import { FaSkull, FaTrophy } from "react-icons/fa";

export default ({ name, achievements, skulls }) => {
  const [activeTab, setActiveTab] = React.useState("achievements");

  return (
    <div className="game">
      <div className="game__sidebar">
        <ul className="game__sidebar-list">
          <li className="game__sidebar-list-item">
            <button
              onClick={() => setActiveTab("achievements")}
              className={activeTab === "achievements" ? "active" : ""}
              title="Achievements"
            >
              <FaTrophy />
            </button>
          </li>
          <li className="game__sidebar-list-item">
            <button
              onClick={() => setActiveTab("skulls")}
              className={activeTab === "skulls" ? "active" : ""}
              title="Skulls"
            >
              <FaSkull />
            </button>
          </li>
        </ul>
      </div>
      <div className="game__sections">
        <div
          className={
            "game__section" + (activeTab === "achievements" ? " active" : "")
          }
        >
          <h2>{name} Achievements</h2>
          <Achievements categories={achievements} />
        </div>
        <div
          className={
            "game__section" + (activeTab === "skulls" ? " active" : "")
          }
        >
          <h2>{name} Skulls</h2>
          <Skulls skulls={skulls} />
        </div>
      </div>
    </div>
  );
};
