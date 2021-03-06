import React from "react";
import Achievements from "./achievements/Achievements";
import Skulls from "./skulls/Skulls";
import Terminals from "./terminals/Terminals";
import DataPads from "../features/reach/datapads/DataPads";
import { FaSkull, FaTrophy, FaTerminal, FaTabletAlt } from "react-icons/fa";

export default ({ name, achievements, skulls, terminals, datapads }) => {
  const [activeTab, setActiveTab] = React.useState("Achievements");

  return (
    <div className="game">
      <h2>
        {name} {activeTab}
      </h2>
      <br />
      <div className="game__navbar">
        <ul className="game__navbar-list">
          <li
            className={
              "game__navbar-list-item" +
              (activeTab === "Achievements" ? " active" : "")
            }
          >
            <button onClick={() => setActiveTab("Achievements")}>
              <FaTrophy /> Achievements
            </button>
          </li>
          {skulls && (
            <li
              className={
                "game__navbar-list-item" +
                (activeTab === "Skulls" ? " active" : "")
              }
            >
              <button onClick={() => setActiveTab("Skulls")}>
                <FaSkull /> Skulls
              </button>
            </li>
          )}
          {terminals && (
            <li
              className={
                "game__navbar-list-item" +
                (activeTab === "Terminals" ? " active" : "")
              }
            >
              <button
                onClick={() => setActiveTab("Terminals")}
                title="Terminals"
              >
                <FaTerminal /> Terminals
              </button>
            </li>
          )}
          {datapads && (
            <li
              className={
                "game__navbar-list-item" +
                (activeTab === "Datapads" ? " active" : "")
              }
            >
              <button
                onClick={() => setActiveTab("Datapads")}
                title="Data Pads"
              >
                <FaTabletAlt /> Data Pads
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="game__sections">
        <div
          className={
            "game__section" + (activeTab === "Achievements" ? " active" : "")
          }
        >
          <Achievements categories={achievements} />
        </div>
        {skulls && (
          <div
            className={
              "game__section" + (activeTab === "Skulls" ? " active" : "")
            }
          >
            <Skulls skulls={skulls} />
          </div>
        )}
        {terminals && (
          <div
            className={
              "game__section" + (activeTab === "Terminals" ? " active" : "")
            }
          >
            <Terminals terminals={terminals} />
          </div>
        )}
        {datapads && (
          <div
            className={
              "game__section" + (activeTab === "Datapads" ? " active" : "")
            }
          >
            <DataPads datapads={datapads} />
          </div>
        )}
      </div>
    </div>
  );
};
