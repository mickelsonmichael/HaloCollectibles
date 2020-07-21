import React from "react";
import "./App.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import NavMenu from "./common/NavMenu";
import "./bootstrap.min.css";
import Home from "./common/Home";
import Reach from "./features/reach/Reach.jsx";
import { Container } from "reactstrap";
import Halo3 from "./features/halo3/Halo3";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <NavMenu />
        </header>
        <Container fluid className="mt-3">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/halo3" exact>
              <Halo3 />
            </Route>
            <Route path="/reach" exact>
              <Reach />
            </Route>
          </Switch>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
