import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
  Button,
  Label,
} from "reactstrap";
import Switch from "react-switch";
import UserLogin from "./UserLogin";
import NavLink from "./NavLink";
import AccountModal from "../login/AccountModal";
import { FaCog } from "react-icons/fa";
import { LoginContext } from "../login/LoginContext";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [showAccounts, setShowAccounts] = useState(false);
  const { currentGamertag, toggleCompleted, showCompleted } = React.useContext(
    LoginContext
  );

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
            <div className="d-flex align-items-baseline ml-2">
              <Label className="mr-2 text-right">
                <Switch
                  onChange={() => toggleCompleted()}
                  checked={showCompleted}
                  height={17}
                  width={34}
                  className="mr-2 align-text-bottom"
                />
                <span>Show Complete </span>
                <span>
                  for&nbsp;
                  <Link to="/user" className="mr-2">
                    {currentGamertag}
                  </Link>
                </span>
              </Label>
            </div>
            <Button color="link" onClick={() => setShowAccounts(true)}>
              <FaCog />
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
      <AccountModal
        isOpen={showAccounts}
        onClose={() => setShowAccounts(false)}
      />
    </div>
  );
};
