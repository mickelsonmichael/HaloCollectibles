import React from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Spinner,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Switch from "react-switch";

export default () => {
  const {
    player,
    setGamertag,
    isLoading,
    toggleShowComplete,
    clearPlayer,
  } = React.useContext(UserContext);
  const [userGamertag, setUserGamertag] = React.useState(player.gamertag);

  if (player.achievements.length > 0 && !isLoading) {
    return (
      <div className="d-flex align-items-baseline ml-2">
        <Label className="mr-2 text-right">
          <Switch
            onChange={() => toggleShowComplete()}
            checked={player.showCompleted}
            height={17}
            width={34}
            className="mr-2 align-text-bottom"
          />
          <span>Show Complete </span>
          <span>
            for&nbsp;
            <Link to="/user" className="mr-2">
              {player.gamertag}
            </Link>
          </span>
        </Label>

        <Button
          size="sm"
          color="outline-danger"
          type="button"
          onClick={() => clearPlayer()}
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
        bsSize="sm"
        placeholder="Gamertag"
        onChange={(e) => setUserGamertag(e.target.value)}
        disabled={isLoading}
      />
      <InputGroupAddon addonType="append">
        <Button
          type="button"
          color="outline-info"
          className="btn-sm"
          size="sm"
          onClick={() => setGamertag(userGamertag)}
          disabled={isLoading}
        >
          {isLoading && <Spinner color="light" size="sm" />}
          {!isLoading && "Go"}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};
