import React from "react";
import Data from "../reach/data.json";
import Achievements from "../../common/Achievements";
import TabSection from "../../common/TabSection";

const Reach = () => {
  const tabs = Data.categories.map(({ achievements, title }) => {
    return {
      title,
      content: <Achievements achievements={achievements} title={title} />,
    };
  });

  return (
    <div>
      <h2>Halo: Reach</h2>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default Reach;
