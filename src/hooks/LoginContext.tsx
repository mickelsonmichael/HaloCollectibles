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

const COOKIE_NAME = "STEAM_USER_ID";

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [steamId, setSteamId] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const isLoggedIn = useMemo(() => steamId != null, [steamId]);

  useEffect(() => {
    const storedValue = Cookies.get(COOKIE_NAME);

    setSteamId(storedValue ?? null);
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
    Cookies.remove(COOKIE_NAME);
    setSteamId(null);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, logout, achievements }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
