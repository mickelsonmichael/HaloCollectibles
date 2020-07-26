import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";

export default ({ url, text }) => {
  const location = useLocation();

  return (
    <NavItem>
      <Link
        component={NavLink}
        to={url}
        className={location.pathname === { url } ? "active" : ""}
      >
        {text}
      </Link>
    </NavItem>
  );
};
