import React from "react";
import AlertMessage from "../AlertMessage";
import { Col, Row } from "reactstrap";
import AchievementCard from "./AchievementCard";
import { LoginContext } from "../login/LoginContext";

const AchievementCategory = ({ achievements }) => {
  const { showCompleted } = React.useContext(LoginContext);

  if (!showCompleted) {
    achievements = achievements.filter((a) => !a.isComplete);
  }

  if (achievements.length === 0) {
    return (
      <AlertMessage color="info" isVisible>
        No Achievements
      </AlertMessage>
    );
  }

  return (
    <Row noGutters>
      {achievements.map((ach) => (
        <Col lg={4} md={6} xs={12} key={ach.name} className="d-flex">
          <AchievementCard achievement={ach} />
        </Col>
      ))}
    </Row>
  );
};

export default AchievementCategory;
