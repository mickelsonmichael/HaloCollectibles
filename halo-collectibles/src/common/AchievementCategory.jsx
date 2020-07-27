import React from "react";
import AlertMessage from "./AlertMessage";
import { Col, Row } from "reactstrap";
import AchievementCard from "./achievements/AchievementCard";

const AchievementCategory = ({ achievements }) => {
  if (achievements.length === 0) {
    return (
      <AlertMessage color="info" isVisible>
        No Achievements found!
      </AlertMessage>
    );
  }

  return (
    <Row noGutters>
      {achievements.map((ach) => (
        <Col lg={4} md={6} xs={12}>
          <AchievementCard achievement={ach} key={ach.name} />
        </Col>
      ))}
    </Row>
  );
};

export default AchievementCategory;
