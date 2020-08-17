import React from "react";
import SkullCard from "./SkullCard";
import { UserContext } from "../../UserContext";
import "./skulls.css";
import { Col, Row, Alert } from "reactstrap";

export default ({ skulls }) => {
  const { achievements, showComplete } = React.useContext(UserContext).player;
  let filteredSkulls = skulls;

  if (achievements && achievements.length > 0) {
    filteredSkulls = filteredSkulls.map((skull) => {
      const achievement = achievements.find((a) => a.name.includes(skull.name));

      return {
        ...skull,
        isFound: achievement ? achievement.isComplete : false,
      };
    });
  }

  if (!showComplete) {
    filteredSkulls = filteredSkulls.filter((skull) => !skull.isFound);
  }

  if (filteredSkulls.length === 0) {
    return (
      <div>
        <Alert color="info">
          You have already unlocked all the skulls! Toggle the switch in the
          navigation to show your already achieved skulls.
        </Alert>
      </div>
    );
  }

  return (
    <div>
      <h2>Skulls</h2>
      <Row noGutters>
        {filteredSkulls.map((skull) => (
          <Col key={skull.name} sm={12} md={6} lg={4}>
            <SkullCard skull={skull} key={skull.name} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
