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
            <NavLink url="/general" text="General" />
            <NavLink url="/haloce" text="Halo:&nbsp;CE" />
            <NavLink url="/halo2" text="Halo&nbsp;2" />
            <NavLink url="/halo3" text="Halo&nbsp;3" />
            <NavLink url="/ODST" text="Halo&nbsp;3:&nbsp;ODST" />
            <NavLink url="/reach" text="Halo:&nbsp;Reach" />
            <NavLink url="/halo4" text="Halo:&nbsp;4" />
          </Nav>
          <NavbarText>
            <UserLogin />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
