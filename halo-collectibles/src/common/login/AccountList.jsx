import React from "react";
import { LoginContext } from "./LoginContext";
import { Alert } from "reactstrap";
import { FaTrashAlt, FaMapPin, FaCheck } from "react-icons/fa";
import "./Accounts.css";

const AccountList = () => {
  const {
    getAccounts,
    removeAccount,
    setCurrentAccount,
    currentGamertag,
  } = React.useContext(LoginContext);

  const accounts = getAccounts();

  if (accounts.length === 0) {
    return <Alert color="info">No accounts added yet</Alert>;
  }

  return (
    <ul className="account__list">
      {accounts.map((a) => (
        <li key={a.gamertag} className="account__list-item">
          <span className="account__list-item__name">
            {a.gamertag.toUpperCase()}
          </span>
          {a.gamertag === currentGamertag ? (
            <span className="account__list-item__current">
              <FaCheck />
            </span>
          ) : (
            <span
              className="account__list-item__set"
              onClick={() => setCurrentAccount(a.gamertag)}
            >
              <FaMapPin />
            </span>
          )}

          <span
            className="account__list-item__remove"
            onClick={() => removeAccount(a.gamertag)}
          >
            <FaTrashAlt />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default AccountList;
