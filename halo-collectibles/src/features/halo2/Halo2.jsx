import React from "react";
import Achievements from "../../common/achievements/Achievements";
import Categories from "./achievements.json";
import AchievementCount from "../../common/achievements/AchievementCount";
import Skulls from "../../common/skulls/Skulls";
import skulls from "./skulls.json";
import { Route, useRouteMatch } from "react-router";
import { Nav, Navbar, NavbarBrand } from "reactstrap";
import NavLink from "../../common/layout/NavLink";

const Halo2 = () => {
  let match = useRouteMatch();

  return (
    <div>
      <Navbar color="primary" dark expand={false}>
        <NavbarBrand>Halo 2</NavbarBrand>
        <Nav navbar className="mr-auto flex-row">
          <NavLink url={match.path} text="Achievements" />
          <NavLink url={`${match.path}/skulls`} text="Skulls" />
        </Nav>
      </Navbar>

      <br />

      <Route path={match.path} exact>
        <h2>
          Achievements
          <AchievementCount className="float-right" categories={Categories} />
        </h2>
        <Achievements categories={Categories} />
      </Route>
      <Route path={`${match.path}/skulls`}>
        <Skulls skulls={skulls} />
      </Route>
    </div>
  );
};

export default Halo2;
