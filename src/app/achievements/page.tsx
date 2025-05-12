"use client";

import Filters from "@/components/filters/Filters";
import { AchievementsProvider } from "../../hooks/AchievementsContext";
import AchievementsTable from "@/components/AchievementsTable";
import Search from "@/components/filters/Search";

const AchievementsPage = () => (
  <AchievementsProvider>
    <Filters />
    <Search />
    <AchievementsTable />
  </AchievementsProvider>
);

export default AchievementsPage;
