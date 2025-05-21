import { useAchievements } from "@/components/achievements/AchievementsContext";
import { useLogin } from "@/hooks/LoginContext";
import ProgressBar from "../ProgressBar";

const AchievementsTable = () => {
  const { achievements } = useAchievements();
  const { isLoggedInWithXbox } = useLogin();

  return (
    <table className="flex flex-col md:table table-auto mt-2 border-1 w-full">
      <thead>
        <tr className="flex flex-col md:table-row *:p-2 bg-blue-500/50 border-1">
          <td>Title</td>
          <td>Description</td>
          {isLoggedInWithXbox && <td>Progress</td>}
          <td>Game</td>
          <td>Collection</td>
        </tr>
      </thead>
      <tbody>
        {achievements.map((achievement) => (
          <tr
            key={`${achievement.game}-${achievement.name}`}
            className="flex flex-col md:table-row *:p-2 even:bg-blue-500/25"
          >
            <td className="col-sm">{achievement.name}</td>
            <td className="w-100">{achievement.description}</td>
            {
              isLoggedInWithXbox &&
                achievement.progress != null &&
                typeof achievement.progress !== "boolean" &&
                achievement.progress.target > 1 ? (
                  <td className="w-100">
                    <ProgressBar {...achievement.progress} />
                  </td>
                ) : null
            }
            <td className="col-sm">{achievement.game}</td>
            <td className="col-sm">{achievement.collection}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AchievementsTable;
