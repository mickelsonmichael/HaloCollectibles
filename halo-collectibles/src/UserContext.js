import React from "react";

const UserContext = React.createContext({
  gamertag: "",
  achievements: [],
  showCompleted: false,
});

export default UserContext;
