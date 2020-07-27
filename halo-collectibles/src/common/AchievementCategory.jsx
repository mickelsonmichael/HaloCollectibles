import React from "react";
import AlertMessage from "./AlertMessage";
import { Table } from "reactstrap";
import { MdCheckCircle } from "react-icons/md";

const AchievementCategory = ({ achievements }) => {
  if (achievements.length === 0) {
    return (
      <AlertMessage color="info" isVisible>
        No Achievements to Display
      </AlertMessage>
    );
  }

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gamerscore</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {achievements.map((ach) => (
          <tr key={ach.name}>
            <td>
              {ach?.isComplete && (
                <MdCheckCircle
                  className="mr-2"
                  style={{ verticalAlign: "sub" }}
                  size={17}
                />
              )}
              {ach.name}
            </td>
            <td>{ach.score}</td>
            <td>{ach.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AchievementCategory;
