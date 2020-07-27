import React from "react";
import PropTypes from "prop-types";
import { Input, Row, Col } from "reactstrap";
import AlertMessage from "../common/AlertMessage";
import Categories from "./Categories";
import UserContext from "../UserContext";
import AchievementCategory from "./AchievementCategory";

const filterAchievements = (achievements, filter) => {
  if (filter) {
    return achievements.filter(
      (a) => a.name.includes(filter) || a.description.includes(filter)
    );
  }
  return achievements;
};

const Achievements = ({ categories }) => {
  const { user } = React.useContext(UserContext);
  const [currentCategory, setCategory] = React.useState("");
  const [filter, setFilter] = React.useState("");

  let achievements = currentCategory
    ? categories.find((cat) => cat.title === currentCategory).achievements
    : categories.reduce((acc, cur) => acc.concat(cur.achievements), []);

  achievements = filterAchievements(achievements, filter);

  if (user.achievements.length > 0) {
    achievements = achievements.map((ach) => {
      let userProgress = user.achievements.find(
        (x) => x.name.toLowerCase() === ach.name.toLowerCase()
      );
      return userProgress ?? { ...ach, isComplete: false };
    });

    if (!user.showComplete) {
      achievements = achievements.filter((ach) => ach.isComplete === false);
    }
  }

  return (
    <div>
      <Row>
        <Col md="4" sm="12">
          {categories.length > 1 && (
            <Categories
              categories={categories}
              onOptionChange={(val) => setCategory(val)}
            />
          )}
        </Col>
        <Col md={{ size: 3, offset: 5 }} sm="12">
          <Input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            placeholder={"Search " + achievements.length + " achievements"}
            size="sm"
          />
        </Col>
      </Row>

      <br />

      <AlertMessage isVisible={achievements.length === 0} color="info">
        You have all the achievements in this category!
      </AlertMessage>

      <AchievementCategory achievements={achievements} />
    </div>
  );
};

Achievements.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      achievements: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          description: PropTypes.string,
          score: PropTypes.number,
        })
      ),
    })
  ),
};

export default Achievements;
