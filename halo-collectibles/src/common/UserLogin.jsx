import React from "react";
import { clearSession } from "../utilities/storage";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Spinner,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

export default () => {
  const { user, setUser } = React.useContext(UserContext);
  const [gamertag, setGamertag] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

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
          setUser((_) => ({
            gamertag: gamertag,
            achievements: achievements,
            showComplete: false,
          }));

          setIsLoading(false);
        },
        (_) => setIsLoading(false)
      );
  };

  const clearAchievements = () => {
    clearSession();
    setUser({ gamertag: "", achievements: [], showComplete: false });
  };

  const toggleShowComplete = () => {
    setUser({
      ...user,
      showComplete: !user.showComplete,
    });
  };

  if (user.gamertag) {
    return (
      <div>
        <Label className="mr-2">
          <Input
            type="checkbox"
            checked={user.showComplete}
            onChange={(e) => {
              toggleShowComplete(e.target.checked);
            }}
          />
          Show Complete
        </Label>
        <Link to="/user" className="mr-2">
          {user.gamertag}
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
          {isLoading && <Spinner color="light" size="sm" />}
          {!isLoading && "Go"}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};
