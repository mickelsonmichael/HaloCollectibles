import React, { useReducer, useEffect, useState } from "react";

const userKey = "HALO_COLLECTIBLES_USER";

const initialState = {
  gamertag: "",
  achievements: [],
  xuid: "",
  showCompleted: false,
  lastUpdate: new Date(),
  isLoading: false,
};

const UserContext = React.createContext(initialState);
const localState = JSON.parse(localStorage.getItem(userKey));

const reducer = (player, newPlayer) => {
  if (!newPlayer) {
    localStorage.removeItem(userKey);
    return "";
  }

  return {
    ...player,
    ...newPlayer,
  };
};

const getXuid = async (gamertag) => {
  var response = await fetch(
    `https://halocollectiblesapi.azurewebsites.net/api/Search?name=${gamertag}`
  );

  if (response.ok) {
    return await response.text();
  }

  throw new Error("Invalid gamertag or unable to fetch the XUID");
};

const getProgress = async (xuid) => {
  const response = await fetch(
    `https://halocollectiblesapi.azurewebsites.net/api/GetHalo?xuid=${xuid}`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Unable to fetch the achievements");
};

const isExpired = (date) => {
  const hour = 1000 * 60 * 60;

  return Date.now() - hour > date;
};

const UserProvider = (props) => {
  const [player, setPlayer] = useReducer(reducer, localState || initialState);
  const [gamertag, setGamertag] = useState(player.gamertag);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowComplete = () => {
    setPlayer({
      showCompleted: !player.showCompleted,
    });
  };

  const clearPlayer = () => {
    setPlayer(initialState);
    setGamertag("");
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let xuid = await getXuid(gamertag);
      let achievements = await getProgress(xuid);
      console.log(achievements);

      setPlayer({
        xuid,
        achievements,
        gamertag: gamertag,
        lastUpdate: new Date(),
      });

      setIsLoading(false);
    };

    if (
      gamertag !== "" &&
      (player.achievements.length === 0 || isExpired(player.lastUpdate))
    ) {
      fetchData();
    }
  }, [gamertag, player.achievements.length, player.lastUpdate]);

  useEffect(() => {
    localStorage.setItem(userKey, JSON.stringify(player));
  }, [player, gamertag]);

  return (
    <UserContext.Provider
      value={{
        player,
        setGamertag,
        isLoading,
        toggleShowComplete,
        clearPlayer,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
