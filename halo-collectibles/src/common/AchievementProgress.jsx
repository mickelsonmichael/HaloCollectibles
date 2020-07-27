import React, { useState } from "react";
import UserContext from "../UserContext";
import { Progress, Tooltip } from "reactstrap";

export default ({ achievement }) => {
  const { achievements } = React.useContext(UserContext).user;
  const [tooltip, openTooltip] = useState(false);

  const toggle = () => openTooltip(!tooltip);

  if (achievements === undefined || achievements.length === 0) {
    return null;
  }

  const userAchievement = achievements.find((a) => a.name === achievement.name);

  if (
    userAchievement === undefined ||
    userAchievement.target === undefined ||
    userAchievement.target === 1
  ) {
    return null;
  }

  const { progress, current, target } = userAchievement;
  const id =
    achievement.name.replace(/ /g, "-").replace(/[?.,:!"']/g, "") + "-tooltip";

  return (
    <div>
      <Progress
        color={progress > 1 ? "success" : "info"}
        value={progress * 100}
        id={id}
      />
      <Tooltip placement="top" isOpen={tooltip} target={id} toggle={toggle}>
        {current} / {target}
      </Tooltip>
    </div>
  );
};
