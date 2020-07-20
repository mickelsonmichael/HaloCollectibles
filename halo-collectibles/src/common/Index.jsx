import React from "react";
import { Jumbotron } from "reactstrap";

const Home = (props) => {
  return (
    <Jumbotron>
      <h1 className="display-3">Halo Collectibles</h1>
      <p className="lead">
        This site will work as a tracking mechanism for following which
        achievements and Collectibles you have claimed.
      </p>
      <hr className="my-2" />
      <p>Use the navigation above to select a game.</p>
    </Jumbotron>
  );
};

export default Home;
