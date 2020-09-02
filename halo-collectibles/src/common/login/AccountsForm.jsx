import React from "react";
import { Row, Col } from "reactstrap";
import AccountList from "./AccountList";
import LoginForm from "./AddAccountForm";
import { LoginProvider } from "./LoginContext";

const AccountsForm = () => {
  return (
    <LoginProvider>
      <Row>
        <Col>
          <AccountList />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </LoginProvider>
  );
};

export default AccountsForm;
