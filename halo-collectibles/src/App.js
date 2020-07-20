import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavMenu from "./common/NavMenu";
import "./bootstrap.min.css";
import Home from "./common/Home";
import Reach from "./features/reach/Reach.jsx";
import { Container } from "reactstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavMenu />
        </header>
        <Container fluid className="mt-3">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/reach" exact>
              <Reach />
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
