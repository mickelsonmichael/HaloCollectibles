import React, { useContext } from "react";
import { Jumbotron } from "reactstrap";
import { UserContext } from "../UserContext";
import AlertMessage from "./AlertMessage";

export default () => {
  const { gamertag } = useContext(UserContext).user;

  return (
    <div>
      <AlertMessage isVisible={gamertag}>
        You are logged in! Select a game from the navigation above to view the
        remaining achievements. Or click your name in the corner to view all
        your completed achievements.
      </AlertMessage>
      <Jumbotron>
        <h1 className="display-3">Halo Collectibles</h1>
        <p className="lead">
          This site will work as a tracking mechanism for following which
          achievements and Collectibles you have claimed.
        </p>
        <hr className="my-2" />
        <p>
          You may view the achievements using the navigation options above. For
          a more curated experience, use the textbox to enter your Xbox Live
          Gamertag and filter out the achievements you already have completed.
        </p>
      </Jumbotron>
    </div>
  );
};
