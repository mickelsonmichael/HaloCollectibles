import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { MdExpandMore, MdExpandLess, MdCheckCircle } from "react-icons/md";
import { Collapse } from "reactstrap";

const DataPadCard = ({ datapad }) => {
  const [collapse, setCollapse] = React.useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="datapad-card">
      <div
        className={
          datapad.isLegendary
            ? "datapad-card__header legendary"
            : "datapad-card__header"
        }
      >
        <div className="datapad-card__title">
          <div className="datapad-card__title-text">
            Data Pad {datapad.id}
            {datapad.isFound && (
              <MdCheckCircle className="datapad-card__title-icon" />
            )}
          </div>
          <div className="datapad-card__level">
            {datapad.level} -{" "}
            {datapad.isLegendary ? "Legendary Only" : "Any Difficulty"}
          </div>
        </div>

        <div className="datapad-card__link">
          <a
            href={`https://www.youtube.com/watch?v=${datapad.video}`}
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
          className="datapad-card__location"
          dangerouslySetInnerHTML={{ __html: datapad.location }}
        />
      </Collapse>
    </div>
  );
};

export default DataPadCard;
