import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reach from "./features/reach/Reach";
import NavMenu from "./common/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./common/Index";
import { Container } from "reactstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavMenu />
        </header>
        <Container fluid className="mt-3">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/reach" exact>
            <Reach />
          </Route>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
