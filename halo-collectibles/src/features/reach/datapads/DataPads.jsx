import React from "react";
import DatapadCard from "./DataPadCard";
import { UserContext } from "../../../UserContext";
import "./DataPads.css";
import { Col, Row, Alert } from "reactstrap";

const DataPads = ({ datapads }) => {
  const { achievements, showCompleted } = React.useContext(UserContext).player;
  let filteredDatapads = datapads;

  if (achievements && achievements.length > 0) {
    filteredDatapads = filteredDatapads.map((datapad) => {
      const achievement = achievements.find((a) =>
        a.description.toLowerCase().includes(`data pad ${datapad.id}`)
      );

      return {
        ...datapad,
        isFound: achievement ? achievement.isComplete : false,
      };
    });
  }

  if (!showCompleted) {
    filteredDatapads = filteredDatapads.filter((datapad) => !datapad.isFound);
  }

  if (filteredDatapads.length === 0) {
    return (
      <div>
        <Alert color="info">
          You have already unlocked all the datapads! Toggle the switch in the
          navigation to show your already achieved datapads.
        </Alert>
      </div>
    );
  }

  return (
    <div>
      <Row noGutters>
        {filteredDatapads.map((datapad) => (
          <Col key={datapad.name} sm={12} md={6} lg={4}>
            <DatapadCard datapad={datapad} key={datapad.name} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DataPads;
