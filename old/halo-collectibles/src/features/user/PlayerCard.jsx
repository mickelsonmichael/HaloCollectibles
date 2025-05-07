import React from "react";
import Emblem from "./Emblem";
import { Progress } from "reactstrap";

export default ({ gamertag, complete, total }) => {
  const percent = (complete / total) * 100;

  return (
    <div className="d-flex mb-2">
      <Emblem gamertag={gamertag} />

      <div className="flex-grow-1 align-self-center m-2">
        <h2 className="d-flex">
          <strong className="mr-auto">{gamertag.toUpperCase()}</strong>
          <span className="text-muted">
            {complete}/{total} ({Math.floor(percent)}%)
          </span>
        </h2>
        <Progress color="info" value={percent} />
      </div>
    </div>
  );
};
