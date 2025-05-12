import { useAchievements } from "@/hooks/AchievementsContext";
import CollectionCheckboxes from "@/components/filters/CollectionCheckboxes";
import Icon from "@/components/Icon";
import GameCheckboxes from "@/components/filters/GameCheckboxes";
import useCachedToggle from "@/hooks/useCachedToggle";

const Filters = () => {
  const { isOn: showFilters, toggle: toggleFilters } = useCachedToggle("FILTERS_ON");
  const { achievements, collections } = useAchievements();

  return (
    <>
      <div className="flex">
        <div className="mr-auto">
          {achievements.length} total achievement(s)
        </div>
        <div
          className={`flex flex-col align-middle p-1 cursor-pointer rounded-sm ${
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
          (showFilters ? "h-auto border-1 rounded-sm p-2 mt-2" : "h-0")
        }
      >
        <div className="">
          <div>
            <p className="text-lg my-2">Games</p>
            <div className="grid grid-cols-4">
              <GameCheckboxes />
            </div>
          </div>
          <div>
            <p className="text-lg my-2">Collections</p>
            {collections.length > 0 ? (
              <div className="grid grid-cols-4">
                <CollectionCheckboxes />
              </div>
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
    </>
  );
};

export default Filters;
