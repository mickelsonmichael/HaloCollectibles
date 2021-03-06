import React from "react";
import { Container } from "reactstrap";
import { Switch, Route, HashRouter } from "react-router-dom";

// App Components
import UserAchievements from "./features/user/UserAchievements";
import { UserProvider } from "./UserContext";
import NavMenu from "./common/layout/NavMenu";

// Assets
import "./bootstrap.min.css";
import "./App.css";

// Routes
import Home from "./common/Home";
import General from "./features/general/General";
import HaloCE from "./features/haloce/HaloCE";
import Halo2 from "./features/halo2/Halo2";
import Halo3 from "./features/halo3/Halo3";
import ODST from "./features/ODST/ODST";
import Reach from "./features/reach/Reach.jsx";
import Halo4 from "./features/halo4/Halo4";
import Footer from "./common/layout/Footer";
import Status from "./features/general/Status";

export default () => (
  <HashRouter>
    <UserProvider>
      <div className="App">
        <header>
          <NavMenu />
        </header>
        <Container fluid className="mt-3 app__body">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user" exact>
              <UserAchievements />
            </Route>
            <Route path="/general" exact>
              <General />
            </Route>
            <Route path="/haloce" exact>
              <HaloCE />
            </Route>
            <Route path="/halo2">
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
            <Route path="/halo4" exact>
              <Halo4 />
            </Route>
            <Route path="/status" exact>
              <Status />
            </Route>
          </Switch>
        </Container>
        <footer>
          <Footer />
        </footer>
      </div>
    </UserProvider>
  </HashRouter>
);
