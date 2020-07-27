import React, { useReducer, useEffect } from "react";

const userKey = "HALO_COLLECTIBLES_USER";

const initialState = {
  gamertag: "",
  achievements: [],
  showCompleted: false,
};

const UserContext = React.createContext(initialState);
const localState = JSON.parse(localStorage.getItem(userKey));

const reducer = (user, newUser) => {
  console.log("reducing");
  if (newUser === null) {
    localStorage.removeItem(userKey);
    return initialState;
  }

  return { ...user, ...newUser };
};

const UserProvider = (props) => {
  const [user, setUser] = useReducer(reducer, localState || initialState);

  useEffect(() => localStorage.setItem(userKey, JSON.stringify(user)), [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
