import React from "react";
import { Alert } from "reactstrap";

export default ({ children, isVisible = true, color }) => {
  if (isVisible) {
    return <Alert color={color}>{children}</Alert>;
  } else {
    return null;
  }
};
