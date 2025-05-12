import { useAchievements } from "@/hooks/AchievementsContext";

const AchievementsTable = () => {
  const { achievements } = useAchievements();

  return (
    <table className="table-auto mt-2 border-1 w-full">
      <thead>
        <tr className="*:p-2 bg-blue-500/50 border-1">
          <td>Title</td>
          <td>Description</td>
          <td>Score</td>
          <td>Game</td>
          <td>Collection</td>
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
            <td>{achievement.collection}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AchievementsTable;
