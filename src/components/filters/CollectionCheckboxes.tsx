import { useAchievements } from "@/hooks/AchievementsContext";
import ToggleButton from "../ToggleButton";

const CollectionCheckboxes = () => {
  const {
    collections,
    toggleCollection,
    enableAllCollections,
    disableAllCollections,
    focusCollection,
  } = useAchievements();

  return (
    <>
      {collections.map(({ name, enabled }) => {
        const key = `filter-collection-${name}`;

        return (
          <ToggleButton
            key={key}
            name={key}
            enabled={enabled}
            onToggle={() => toggleCollection(name)}
            actions={[
              { icon: "crosshair", onClick: () => focusCollection(name) },
            ]}
          >
            {name}
          </ToggleButton>
        );
      })}
      <div className="grid grid-cols-2">
        <div
          onClick={enableAllCollections}
          className={
            "cursor-pointer border-1 rounded-sm p-2 m-1 select-none text-center"
          }
        >
          All
        </div>
        <div
          onClick={disableAllCollections}
          className={
            "cursor-pointer border-1 rounded-sm p-2 m-1 select-none text-center"
          }
        >
          None
        </div>
      </div>
    </>
  );
};

export default CollectionCheckboxes;
