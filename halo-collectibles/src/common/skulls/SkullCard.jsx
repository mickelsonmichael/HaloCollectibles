import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { MdExpandMore, MdExpandLess, MdCheckCircle } from "react-icons/md";
import { Collapse } from "reactstrap";

export default ({ skull }) => {
  const [collapse, setCollapse] = React.useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="skull-card">
      <div
        className={
          skull.difficulty === "Legendary"
            ? "skull-card__header legendary"
            : "skull-card__header"
        }
      >
        <div className="skull-card__title">
          <dvi className="skull-card__title-text">
            {skull.name}
            {skull.isFound && (
              <MdCheckCircle className="skull-card__title-icon" />
            )}
          </dvi>
          <div className="skull-card__level">
            {skull.level} - {skull.difficulty}
          </div>
        </div>

        <div className="skull-card__link">
          <a
            href={`https://www.youtube.com/watch?v=${skull.video}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube />
          </a>
          {collapse ? (
            <div onClick={toggle}>
              Location
              <MdExpandLess />
            </div>
          ) : (
            <div onClick={toggle}>
              Location
              <MdExpandMore />
            </div>
          )}
        </div>
      </div>
      <Collapse isOpen={collapse}>
        <div
          className="skull-card__location"
          dangerouslySetInnerHTML={{ __html: skull.location }}
        />
      </Collapse>
    </div>
  );
};
