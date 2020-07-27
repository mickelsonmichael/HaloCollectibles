import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import UserLogin from "./UserLogin";
import { getGamertag } from "../utilities/storage";
import NavLink from "./NavLink";

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const gamertag = getGamertag();

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link component={NavbarBrand} to="/">
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

            {gamertag && <NavLink url="/user" text={gamertag} />}
          </Nav>
          <NavbarText>
            <UserLogin />
          </NavbarText>
        </Collapse>
      </Navbar>
    
    </div>
  );
};

export default NavMenu;
