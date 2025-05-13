"use client";

import Filters from "@/components/filters/Filters";
import { AchievementsProvider } from "../../hooks/AchievementsContext";
import AchievementsTable from "@/components/AchievementsTable";
import Search from "@/components/filters/Search";
import Unmatched from "@/components/Unmatched";

const AchievementsPage = () => (
  <AchievementsProvider>
    {process.env.NODE_ENV === "development" && <Unmatched />}
    <Filters />
    <Search />
    <AchievementsTable />
  </AchievementsProvider>
);

export default AchievementsPage;
