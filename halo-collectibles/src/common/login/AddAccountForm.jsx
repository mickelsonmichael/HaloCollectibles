import React from "react";
import { LoginContext } from "./LoginContext";
import {
  Alert,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Spinner,
} from "reactstrap";

const LoginForm = () => {
  const { addAccountAsync } = React.useContext(LoginContext);
  const [gamertag, setGamertag] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleGamertagChange = (e) => {
    setIsError(false);
    setGamertag(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      await addAccountAsync(gamertag);
      setGamertag("");
    } catch (ex) {
      console.error(ex);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isError && (
        <Alert color="danger">
          Unable to add Account. Please double check the spelling and try again.
        </Alert>
      )}

      <InputGroup size="sm">
        <Input
          type="text"
          bsSize="sm"
          placeholder="Enter your gamertag"
          onChange={handleGamertagChange}
          value={gamertag}
        />

        <InputGroupAddon addonType="append">
          <Button
            type="submit"
            color="outline-info"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? <Spinner color="light" size="sm" /> : "Add"}
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default LoginForm;
