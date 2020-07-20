import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

const Achievements = ({ title, achievements }) => {
  return (
    <div>
      <div className="h3 mb-4">{title}</div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gamerscore</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((ach) => (
            <tr>
              <td>{ach.name}</td>
              <td>{ach.score}</td>
              <td>{ach.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

Achievements.propTypes = {
  title: PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.object),
};

export default Achievements;
