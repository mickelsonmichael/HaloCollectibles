import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "reactstrap";

export default ({ url, text }) => {
  const location = useLocation();
  const cssClass =
    "nav-link " + (location.pathname === { url } ? "active" : "");

  return (
    <NavItem>
      <Link to={url} className={cssClass}>
        {text}
      </Link>
    </NavItem>
  );
};
