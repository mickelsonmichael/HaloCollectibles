import React from "react";
import PropTypes from "prop-types";
import { Input, Row, Col, Spinner } from "reactstrap";
import Categories from "./Categories";
import AchievementCategory from "./AchievementCategory";
import { LoginContext } from "../login/LoginContext";

const getFilteredAchievements = (categories, currentCategory, filter) => {
  let achievements = currentCategory
    ? categories.find((cat) => cat.title === currentCategory).achievements
    : categories.reduce((acc, cur) => acc.concat(cur.achievements), []);

  if (filter) {
    const lowercaseFilter = filter.toLowerCase();
    achievements = achievements.filter(
      (a) =>
        a.name.toLowerCase().includes(lowercaseFilter) ||
        a.description.toLowerCase().includes(lowercaseFilter)
    );
  }

  if (achievements.every((a) => a.isComplete)) {
    achievements = achievements.sort(
      (a, b) => new Date(b.completedDate) - new Date(a.completedDate)
    );
  } else {
    achievements = achievements.sort((a, b) => b.name - a.name);
  }

  return achievements;
};

const Achievements = ({ categories, forceShowComplete = false }) => {
  const [currentCategory, setCategory] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const { getAchievementsAsync, currentGamertag } = React.useContext(
    LoginContext
  );

  const [achievements, setAchievements] = React.useState(
    getFilteredAchievements(categories, currentCategory, filter)
  );

  React.useEffect(() => {
    const filterAccountAchievements = async () => {
      setIsLoading(true);
      const accountAchievements = await getAchievementsAsync();

      if (accountAchievements.length > 0) {
        setAchievements((stateAch) =>
          stateAch.map((ach) => {
            const accountProgress = accountAchievements.find(
              (a) => a.name.toLowerCase() === ach.name.toLowerCase()
            );

            return (
              { ...accountProgress, link: ach.link } ?? {
                ...ach,
                isComplete: false,
              }
            );
          })
        );
      }

      setIsLoading(false);
    };

    filterAccountAchievements();
  }, [getAchievementsAsync, currentGamertag]);

  if (isLoading) {
    return (
      <div>
        <Spinner size="sm" /> Loading Achievement Progress
      </div>
    );
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
            bsSize="sm"
          />
        </Col>
      </Row>

      <br />

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
