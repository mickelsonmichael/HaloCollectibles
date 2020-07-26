import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

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
              <Link
                component={NavLink}
                to="/haloce"
                className={location.pathname === "/haloce" ? "active" : ""}
              >
                Halo: CE
              </Link>
            </NavItem>
            <NavItem>
              <Link
                component={NavLink}
                to="/halo2"
                className={location.pathname === "/halo2" ? "active" : ""}
              >
                Halo 2
              </Link>
            </NavItem>
            <NavItem>
              <Link
                component={NavLink}
                to="/halo3"
                className={location.pathname === "/halo3" ? "active" : ""}
              >
                Halo 3
              </Link>
            </NavItem>
            <NavItem>
              <Link
                component={NavLink}
                to="/reach"
                className={location.pathname === "/reach" ? "active" : ""}
              >
                Reach
              </Link>
            </NavItem>
            <NavItem>
              <Link
                component={NavLink}
                to="/ODST"
                className={location.pathname === "/ODST" ? "active" : ""}
              >
                ODST
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
