import { useLogin } from "@/hooks/LoginContext";
import AchievementWithProgress from "@/models/AchievementWithProgress";
import ProgressBar from "../ProgressBar";
import Icon from "../Icon";

const AchievementsTableRow = ({
  achievement,
}: {
  achievement: AchievementWithProgress;
}) => {
  const { isLoggedInWithXbox } = useLogin();

  const AchievementProgress = () =>
    achievement.progress !== null &&
    typeof achievement.progress !== "boolean" &&
    achievement.progress.target > 1 ? (
      <td className="w-100">
        <ProgressBar {...achievement.progress} />
      </td>
    ) : (
      <td />
    );

  return (
    <tr className="flex flex-col md:table-row *:p-2 even:bg-blue-500/25">
      <td className="col-sm">{achievement.name}</td>
      <td className="w-100">{achievement.description}</td>
      {isLoggedInWithXbox && <AchievementProgress />}
      <td className="col-sm">{achievement.game}</td>
      <td className="col-sm">{achievement.collection}</td>
      <td className="col-sm">
        <a href={achievement.url} target="_blank">
          <Icon name="file-text" aria-label="Guide" />
        </a>
      </td>
    </tr>
  );
};

export default AchievementsTableRow;
