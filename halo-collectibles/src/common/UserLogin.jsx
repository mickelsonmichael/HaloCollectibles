import React from "react";
import {
  setAchievements,
  getGamertag,
  clearSession,
} from "../utilities/storage";
import { Input, Button, InputGroup, InputGroupAddon } from "reactstrap";
import { Link } from "react-router-dom";

export default () => {
  const [gamertag, setGamertag] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentGamertag, setCurrentGamertag] = React.useState(getGamertag());

  const getUser = () => {
    return fetch(
      "https://halocollectiblesapi.azurewebsites.net/api/Search?name=renson"
    ).then((response) => response.text());
  };

  const getProgress = (xuid) => {
    return fetch(
      "https://halocollectiblesapi.azurewebsites.net/api/GetHalo?xuid=" + xuid
    ).then((response) => response.json());
  };

  const getAchievements = () => {
    setIsLoading(true);

    getUser()
      .then((xuid) => getProgress(xuid))
      .then(
        (achievements) => {
          setAchievements(gamertag, achievements);
          setIsLoading(false);
          setCurrentGamertag(gamertag);
        },
        (error) => setIsLoading(false)
      );
  };

  const clearAchievements = () => {
    clearSession();
    setCurrentGamertag("");
  };

  if (currentGamertag) {
    return (
      <div>
        <Link to="/user" className="mr-2">
          {currentGamertag}
        </Link>
        <Button
          size="sm"
          color="outline-danger"
          type="button"
          onClick={() => clearAchievements()}
        >
          Clear
        </Button>
      </div>
    );
  }

  return (
    <InputGroup>
      <Input
        type="text"
        size="sm"
        placeholder="Gamertag"
        onChange={(e) => setGamertag(e.target.value)}
      />
      <InputGroupAddon>
        <Button
          type="button"
          color="outline-info"
          size="sm"
          onClick={() => getAchievements()}
          disabled={isLoading}
        >
          {isLoading && "Going"}
          {!isLoading && "Go"}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};
