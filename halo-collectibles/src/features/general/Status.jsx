import React from "react";

// Achievement files
import GeneralAchievements from "./categories.json";
import HaloCEAchievements from "../haloce/achievements.json";
import Halo2Achievements from "../halo2/achievements.json";
import Halo3Achievements from "../halo3/achievements.json";
import ODSTAchievements from "../ODST/achievements.json";
import ReachAchievements from "../reach/HaloReachAchievements.json";
import Halo4Achievements from "../halo4/halo4achievements.json";
import { Spinner, Alert } from "reactstrap";
import { useEffect } from "react";

const xuid = "2661278886955474";

const getIssues = (siteAchievements, actualAchievements) => {
  let issues = [];

  for (const ach of actualAchievements) {
    const match = siteAchievements.find(
      (a) => a.name.toLowerCase() === ach.name.toLowerCase()
    );

    if (!match) {
      issues.push(`Missing Achievement: ${ach.name}`);
      continue;
    }

    if (match.score !== ach.score) {
      issues.push(
        `Incorrect Score for ${ach.name}: <Expected ${ach.score}, Actual ${match.score}>`
      );
    }
  }

  for (const bch of siteAchievements) {
    const batch = actualAchievements.find(
      (b) => b.name.toLowerCase() === bch.name.toLowerCase()
    );

    if (!batch) {
      issues.push(`Extra achievement: ${bch.name}`);
    }
  }

  return issues;
};

const Status = () => {
  const [actual, setActual] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUp, setIsUp] = React.useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("HALO_COLLECTIBLES_ACH");

    if (!stored) {
      fetch(
        `https://halocollectiblesapi.azurewebsites.net/api/GetHalo?xuid=${xuid}`
      ).then((response) => {
        if (response.ok) {
          response.json().then((ach) => {
            setActual(ach);
            setIsLoading(false);
            localStorage.setItem("HALO_COLLECTIBLES_ACH", JSON.stringify(ach));
          });
        } else {
          setIsUp(false);
          setIsLoading(false);
        }
      });
    } else {
      setActual(JSON.parse(stored));
      setIsLoading(false);
    }
  }, []);

  const allAchievements = [
    ...GeneralAchievements,
    ...HaloCEAchievements,
    ...Halo2Achievements,
    ...Halo3Achievements,
    ...ODSTAchievements,
    ...ReachAchievements,
    ...Halo4Achievements,
  ]
    .map((category) => category.achievements)
    .reduce((a, v) => a.concat(v));

  console.debug(allAchievements);

  if (isLoading) {
    return (
      <div>
        <Spinner /> Loading Achievements...
      </div>
    );
  }

  if (!isUp) {
    return (
      <Alert color="danger">
        The API is not responding. Contact an administrator
      </Alert>
    );
  }

  const issues = getIssues(allAchievements, actual);

  return (
    <div>
      <strong>Total Tracked by Site: {allAchievements.length}</strong>
      <br />
      <strong>Total Returned by API: {actual.length}</strong>
      {issues.length > 0 && (
        <ul>
          {issues.map((iss, i) => (
            <li key={i}>{iss}</li>
          ))}
        </ul>
      )}
      {issues.length === 0 && <Alert color="success">No issues found!</Alert>}
    </div>
  );
};

export default Status;
