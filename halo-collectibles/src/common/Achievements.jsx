import React from "react";
import PropTypes from "prop-types";
import { Table, Input, Row, Col, Alert } from "reactstrap";
import { getAchievements } from "../utilities/storage";

const Achievements = ({ categories }) => {
  const [currentCategory, setCategory] = React.useState("");
  const [filter, setFilter] = React.useState("");

  let achievements = currentCategory
    ? categories.find((cat) => cat.title === currentCategory).achievements
    : categories.reduce((acc, cur) => acc.concat(cur.achievements), []);

  if (filter) {
    achievements = achievements.filter(
      (ach) => ach.name.includes(filter) || ach.description.includes(filter)
    );
  }

  const userAchievements = getAchievements()
    .filter((ach) => ach.isComplete)
    .map((ach) => ach.name);

  if (userAchievements.length > 0) {
    achievements = achievements.filter(
      (ach) => !userAchievements.includes(ach.name)
    );
  }

  return (
    <div>
      <Row>
        <Col md="4" sm="12">
          <Input
            type="select"
            onChange={(e) => setCategory(e.target.value)}
            size="sm"
          >
            <option value="">- All -</option>
            {categories.map((cat) => (
              <option value={cat.title}>{cat.title}</option>
            ))}
          </Input>
        </Col>
        <Col md={{ size: 2, offset: 6 }} sm="12">
          <Input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search"
            size="sm"
          />
        </Col>
      </Row>

      <br />

      {achievements.length === 0 && (
        <Alert color="info">
          You have all the achievements in this category!
        </Alert>
      )}

      {achievements.length > 0 && (
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
      )}
    </div>
  );
};

Achievements.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      achievements: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        score: PropTypes.number,
      }),
    })
  ),
};

export default Achievements;
