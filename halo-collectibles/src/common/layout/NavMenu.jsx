import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav, NavbarText } from "reactstrap";
import UserLogin from "./UserLogin";
import NavLink from "./NavLink";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link className="navbar-brand" to="/">
          Halo Collectibles
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavLink url="/haloce" text="Halo: CE" />
            <NavLink url="/halo2" text="Halo 2" />
            <NavLink url="/halo3" text="Halo 3" />
            <NavLink url="/reach" text="Halo: Reach" />
            <NavLink url="/ODST" text="Halo 3: ODST" />
          </Nav>
          <NavbarText>
            <UserLogin />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
