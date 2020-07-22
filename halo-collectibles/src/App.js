import React from "react";
import { Container } from "reactstrap";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./common/Home";
import NavMenu from "./common/NavMenu";
import Reach from "./features/reach/Reach.jsx";
import Halo3 from "./features/halo3/Halo3";
import Halo2 from "./features/halo2/Halo2";

import "./bootstrap.min.css";
import "./App.css";

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
            <Route path="/halo2" exact>
              <Halo2 />
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
