import React from "react";
import { Row, Col, Alert } from "reactstrap";
import TerminalCard from "./TerminalCard";
import { UserContext } from "../../UserContext";

import "./terminals.css";

const Terminals = ({ terminals }) => {
  const { achievements, showCompleted } = React.useContext(UserContext).player;

  let filteredTerminals = terminals;

  if (achievements && achievements.length > 0) {
    console.log("mapping");
    filteredTerminals = filteredTerminals.map((terminal) => {
      const achievement = achievements.find((a) =>
        a.description.includes(
          `Activate Terminal ${terminal.id} on ${terminal.level}`
        )
      );
      return {
        ...terminal,
        isFound: achievement ? achievement.isComplete : false,
      };
    });
  }

  if (!showCompleted) {
    filteredTerminals = filteredTerminals.filter(
      (terminal) => !terminal.isFound
    );
  }

  if (filteredTerminals.length === 0) {
    return (
      <div>
        <Alert color="info">
          You have already unlocked all the terminals! Toggle the switch in the
          navigation to show your already achieved terminals.
        </Alert>
      </div>
    );
  }

  return (
    <Row className="terminals" noGutters>
      {filteredTerminals.map((t) => (
        <Col key={t.name} sm={12} md={6} lg={4}>
          <TerminalCard terminal={t} />
        </Col>
      ))}
    </Row>
  );
};

export default Terminals;
