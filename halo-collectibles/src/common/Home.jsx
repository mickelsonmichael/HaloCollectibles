import React from "react";
import { Jumbotron } from "reactstrap";

export default () => (
  <Jumbotron>
    <h1 className="display-3">Halo Collectibles</h1>
    <p className="lead">
      This site will work as a tracking mechanism for following which
      achievements and Collectibles you have claimed.
    </p>
    <hr className="my-2" />
    <p>
      Use the navigation above to select a game and enter your gamertag above to
      filter the achievements you already have completed.
    </p>
  </Jumbotron>
);
