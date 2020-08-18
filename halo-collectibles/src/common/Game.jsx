import React from "react";
import Achievements from "./achievements/Achievements";
import Skulls from "./skulls/Skulls";
import Terminals from "./terminals/Terminals";
import { FaSkull, FaTrophy, FaTerminal } from "react-icons/fa";

export default ({ name, achievements, skulls, terminals }) => {
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
          {skulls && (
            <li className="game__sidebar-list-item">
              <button
                onClick={() => setActiveTab("skulls")}
                className={activeTab === "skulls" ? "active" : ""}
                title="Skulls"
              >
                <FaSkull />
              </button>
            </li>
          )}
          {terminals && (
            <li className="game__sidebar-list-item">
              <button
                onClick={() => setActiveTab("terminals")}
                className={activeTab === "terminals" ? "active" : ""}
                title="Terminals"
              >
                <FaTerminal />
              </button>
            </li>
          )}
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
        {skulls && (
          <div
            className={
              "game__section" + (activeTab === "skulls" ? " active" : "")
            }
          >
            <h2>{name} Skulls</h2>
            <Skulls skulls={skulls} />
          </div>
        )}
        {terminals && (
          <div
            className={
              "game__section" + (activeTab === "terminals" ? " active" : "")
            }
          >
            <h2>{name} Terminals</h2>
            <Terminals terminals={terminals} />
          </div>
        )}
      </div>
    </div>
  );
};
