import React, { useContext } from "react";
import { Jumbotron } from "reactstrap";
import { UserContext } from "../UserContext";
import AlertMessage from "./AlertMessage";

export default () => {
  const { gamertag, xuid } = useContext(UserContext).player;

  return (
    <div>
      <AlertMessage color="info" isVisible={gamertag}>
        You are viewing achievements for{" "}
        <strong>
          {gamertag} (XUID: {xuid})
        </strong>
      </AlertMessage>
      <Jumbotron>
        <h1 className="display-3">Halo Collectibles</h1>
        <p className="lead">
          This site will work as a tracking mechanism for following which
          achievements and Collectibles you have claimed.
        </p>
        <hr className="my-2" />
        <p>
          You may view the achievements using the navigation options above. Use
          the text box above to filter out achievements completed by a
          particular user or to view all of their completed achievements.
        </p>
        <p>
          Achievements will be refreshed every hour. If you notice stale
          achievements, refresh the page.
        </p>
      </Jumbotron>
    </div>
  );
};
