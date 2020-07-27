import React from "react";
import { Container } from "reactstrap";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./common/Home";
import NavMenu from "./common/layout/NavMenu";
import Reach from "./features/reach/Reach.jsx";
import Halo3 from "./features/halo3/Halo3";
import Halo2 from "./features/halo2/Halo2";

import "./bootstrap.min.css";
import "./App.css";
import HaloCE from "./features/haloce/HaloCE";
import ODST from "./features/ODST/ODST";
import UserAchievements from "./features/user/UserAchievements";
import { UserProvider } from "./UserContext";

export default () => (
  <HashRouter>
    <UserProvider>
      <div className="App">
        <header>
          <NavMenu />
        </header>
        <Container fluid className="mt-3">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user" exact>
              <UserAchievements />
            </Route>
            <Route path="/haloce" exact>
              <HaloCE />
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
            <Route path="/ODST" exact>
              <ODST />
            </Route>
          </Switch>
        </Container>
      </div>
    </UserProvider>
  </HashRouter>
);
