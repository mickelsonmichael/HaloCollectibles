"use client";

import useToggle from "@/hooks/useToggle";
import useAchievements from "./useAchievements";
import Icon from "@/components/Icon";
import GameCheckboxes from "@/components/filters/GameCheckboxes";

const AchievementsPage = () => {
  const {
    achievements,
    games,
    collections,
    toggleGame,
    enableAllGames,
    disableAllGames,
  } = useAchievements();
  const { isOn: showFilters, toggle: toggleFilters } = useToggle();

  return (
    <div>
      <div className="flex">
        <div className="mr-auto">
          {achievements.length} total achievement(s)
        </div>
        <div
          className={`flex flex-col align-middle p-1 cursor-pointer ${
            showFilters && "bg-white/10"
          }`}
          onClick={toggleFilters}
        >
          <Icon name="filter" />
        </div>
      </div>

      <div
        className={
          "overflow-hidden " +
          (showFilters ? "h-auto border-1 p-2 mt-2" : "h-0")
        }
      >
        <div className="">
          <div>
            <p className="text-lg my-2">Games</p>
            <div className="grid grid-cols-4">
              <GameCheckboxes enabledGames={games} onToggle={toggleGame} />
              <div className="grid grid-cols-2">
                <div
                  onClick={enableAllGames}
                  className={
                    "cursor-pointer border-1 rounded-sm p-2 m-1 select-none text-center"
                  }
                >
                  All
                </div>
                <div
                  onClick={disableAllGames}
                  className={
                    "cursor-pointer border-1 rounded-sm p-2 m-1 select-none text-center"
                  }
                >
                  None
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg my-2">Collections</p>
            {collections ? (
              <ul className="grid grid-cols-4">
                {collections.map((c) => (
                  <li
                    key={c}
                    className={
                      "cursor-pointer border-1 rounded-sm p-2 m-1 select-none text-center"
                    }
                  >
                    {c}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bg-gray-500/30 p-3 rounded-md text-gray-300">
                <Icon name="info" className="mr-2" />
                Narrow your filter to a single game to filter further by
                collection.
              </p>
            )}
          </div>
        </div>
      </div>

      <table className="table-auto mt-4 border-1 w-full">
        <thead>
          <tr className="*:p-2 bg-blue-500/50 border-1">
            <td>Title</td>
            <td>Description</td>
            <td>Score</td>
            <td>Game</td>
          </tr>
        </thead>
        <tbody>
          {achievements.map((achievement) => (
            <tr
              key={`${achievement.game}-${achievement.name}`}
              className="*:p-2 even:bg-blue-500/25"
            >
              <td>{achievement.name}</td>
              <td>{achievement.description}</td>
              <td>{achievement.score}</td>
              <td>{achievement.game}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AchievementsPage;
