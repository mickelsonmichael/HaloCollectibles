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

  if (userAchievement === undefined) {
    return null;
  }

  const { progress, current, target } = userAchievement;
  const id = achievement.name.replace(/ /g, "-").replace(/[?.,:!"']/g, "");

  return (
    <div>
      <Progress color="info" value={progress * 100} id={id} />
      <Tooltip placement="left" isOpen={tooltip} target={id} toggle={toggle}>
        {current} / {target}
      </Tooltip>
    </div>
  );
};
