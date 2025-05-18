"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "js-cookie";
import UserAchievement from "@/models/UserAchievement";

const LoginContext = createContext({
  isLoggedIn: false,
  achievements: [] as UserAchievement[],
  logout: () => {},
});

interface LoginProviderProps {
  children: ReactNode;
}

const STEAM_COOKIE_NAME = "STEAM_USER_ID";
const XBOX_COOKIE_NAME = "XUID";

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [steamId, setSteamId] = useState<string | null>(null);
  const [xuid, setXuid] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const isLoggedIn = useMemo(
    () => steamId != null || xuid != null,
    [steamId, xuid]
  );

  useEffect(() => {
    const storedSteamId = Cookies.get(STEAM_COOKIE_NAME);
    const storedXuid = Cookies.get(XBOX_COOKIE_NAME);

    setSteamId(storedSteamId ?? null);
    setXuid(storedXuid ?? null);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setAchievements([]);
      return;
    }

    fetch("/api/achievements")
      .then((res) => res.json())
      .then((data) => {
        setAchievements(data.achievements);
      });
  }, [isLoggedIn]);

  const logout = () => {
    Cookies.remove(STEAM_COOKIE_NAME);
    Cookies.remove(XBOX_COOKIE_NAME);
    setSteamId(null);
    setXuid(null);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, logout, achievements }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
