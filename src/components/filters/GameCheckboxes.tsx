import { Game } from "@/app/achievements/useAchievements";

interface GameCheckboxesProps {
  enabledGames: Game[];
  onToggle: (game: Game) => unknown;
}

const GameCheckboxes = ({ enabledGames, onToggle }: GameCheckboxesProps) =>
  Object.values(Game).map((g) => {
    const enabled = enabledGames.includes(g);

      return (
          <label
              key={`filter-game-${g}`}
              htmlFor={`filter-game-${g}`}
              className={"cursor-pointer border-1 rounded-sm p-2 m-1 select-none text-center" + (enabled ? " bg-blue-500/10" : "")}
          >
              <input
                  id={`filter-game-${g}`}
                  type="checkbox"
                  checked={enabled}
                  onChange={() => onToggle(g)}
                  className="hidden cursor-pointer" />
              {g}
          </label>
      );
  });

export default GameCheckboxes;
