import Filters from "@/components/achievements/Filters";
import { AchievementsProvider } from "./AchievementsContext";
import AchievementsTable from "@/components/achievements/AchievementsTable";
import Search from "@/components/achievements/Search";
import Unmatched from "@/components/Unmatched";

const Achievements = () => (
  <AchievementsProvider>
    {process.env.NODE_ENV === "development" && <Unmatched />}
    <Filters />
    <Search />
    <AchievementsTable />
  </AchievementsProvider>
);

export default Achievements;
