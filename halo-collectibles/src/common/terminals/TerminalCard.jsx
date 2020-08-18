import React from "react";
import { MdCheckCircle, MdExpandLess, MdExpandMore } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { Collapse } from "reactstrap";

export default ({ terminal }) => {
  const [collapse, setCollapse] = React.useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="terminal-card">
      <div className="terminal-card__header">
        <div className="terminal-card__title">
          <dvi className="terminal-card__title-text">
            Terminal {terminal.id}
            {terminal.isFound && (
              <MdCheckCircle className="terminal-card__title-icon" />
            )}
          </dvi>
          <div className="terminal-card__level">{terminal.level}</div>
        </div>

        <div className="terminal-card__link">
          <a
            href={`https://www.youtube.com/watch?v=${terminal.video}`}
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
          className="terminal-card__location"
          dangerouslySetInnerHTML={{ __html: terminal.location }}
        />
      </Collapse>
    </div>
  );
};
