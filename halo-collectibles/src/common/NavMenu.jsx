import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import UserLogin from "./UserLogin";

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link component={NavbarBrand} to="/">
          Halo Collectibles
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link component={NavLink} to="/halo2">
                Halo 2
              </Link>
            </NavItem>
            <NavItem>
              <Link component={NavLink} to="/halo3">
                Halo 3
              </Link>
            </NavItem>
            <NavItem>
              <Link component={NavLink} to="/reach">
                Reach
              </Link>
            </NavItem>
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
