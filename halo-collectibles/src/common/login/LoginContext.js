import React, { useReducer, useEffect } from "react";
import {
  getCurrentStored,
  initialState,
  setCurrentStored,
} from "./LoginLocalStorage";
import Account from "./Account";
import { fetchProgress } from "./LoginApi";

const LoginContext = React.createContext(getCurrentStored());

const ACTION_CLEAR = "login/clear";
const ACTION_ACCT_ADD = "login/account/add";
const ACTION_ACCT_SET = "login/account/set";
const ACTION_ACCT_REMOVE = "login/account/remove";
const ACTION_ACCT_UPDATE = "login/account/update";
const ACTION_TOGGLE_COMPLETED = "toggleCompleted";

const reducer = (state, action) => {
  let updatedState;

  switch (action.type) {
    case ACTION_CLEAR:
      updatedState = {
        ...state,
        accounts: [],
      };
      break;
    case ACTION_ACCT_ADD:
      const newAccount = action.account;

      if (state.accounts.some((a) => a.gamertag === newAccount.gamertag)) {
        return state;
      }

      const newCurrent = state.currentAccount ?? newAccount.gamertag;

      updatedState = {
        ...state,
        currentAccount: newCurrent,
        accounts: [...state.accounts, newAccount],
      };
      break;
    case ACTION_ACCT_REMOVE:
      const removeGamertag = action.gamertag.toLowerCase();

      let updatedCurrent = state.currentAccount;

      if (updatedCurrent === removeGamertag) {
        updatedCurrent =
          state.accounts.length > 0 ? state.accounts[0].gamertag : null;
      }

      updatedState = {
        ...state,
        updatedCurrent,
        accounts: state.accounts.filter((a) => a.gamertag !== removeGamertag),
      };
      break;
    case ACTION_ACCT_SET:
      const newActive = action.gamertag.toLowerCase();

      if (state.currentAccount !== newActive) {
        updatedState = {
          ...state,
          currentAccount: newActive,
        };
      }
      break;
    case ACTION_ACCT_UPDATE:
      const updatedAccount = action.account;

      if (state.accounts.some((a) => a.gamertag === updatedAccount.gamertag)) {
        updatedState = {
          ...state,
          accounts: state.accounts.map((a) => {
            if (a.gamertag === updatedAccount.gamertag) {
              return updatedAccount;
            }
            return a;
          }),
        };
      }
      break;
    case ACTION_TOGGLE_COMPLETED:
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };
    default:
      updatedState = state;
      break;
  }

  return updatedState ?? state;
};

const LoginProvider = (props) => {
  const [loginState, dispatch] = useReducer(
    reducer,
    getCurrentStored() || initialState
  );

  useEffect(() => setCurrentStored(loginState), [loginState]);

  const addAccountAsync = async (gamertag) => {
    const account = await Account.createAsync(gamertag.toLowerCase());

    dispatch({ type: ACTION_ACCT_ADD, account });
  };

  const removeAccount = (gamertag) => {
    dispatch({ type: ACTION_ACCT_REMOVE, gamertag });
  };

  const getCurrentAccount = () => {
    if (loginState.currentAccount === null || loginState.accounts.length === 0)
      return null;

    const acct = loginState.accounts.find(
      (a) => a.gamertag === loginState.currentAccount
    );

    return acct ? Account.restore(acct) : null;
  };

  const getAccounts = () => {
    return loginState.accounts;
  };

  const setCurrentAccount = (gamertag) => {
    if (loginState.currentAccount !== gamertag.toLowerCase()) {
      dispatch({ type: ACTION_ACCT_SET, gamertag: gamertag.toLowerCase() });
    }
  };

  const getAchievementsAsync = async () => {
    const account = getCurrentAccount();

    if (!account) {
      return [];
    }

    if (account.achievements.length === 0 || account.isDataExpired()) {
      account.achievements = await fetchProgress(account.xuid);
      account.lastUpdate = Date.now();

      dispatch({ type: ACTION_ACCT_UPDATE, account });
    }

    return account.achievements;
  };

  const toggleCompleted = () => {
    dispatch({ type: ACTION_TOGGLE_COMPLETED });
  };

  return (
    <LoginContext.Provider
      value={{
        addAccountAsync,
        removeAccount,
        getCurrentAccount,
        getAccounts,
        setCurrentAccount,
        getAchievementsAsync,
        toggleCompleted,
        showCompleted: loginState.showCompleted,
        currentGamertag: loginState.currentAccount,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
