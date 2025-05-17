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

const LoginContext = createContext({
  isLoggedIn: false,
  logout: () => {},
});

interface LoginProviderProps {
  children: ReactNode;
}

const COOKIE_NAME = "STEAM_USER_ID";

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [steamId, setSteamId] = useState<string | null>(null);
  const isLoggedIn = useMemo(() => steamId != null, [steamId]);

  useEffect(() => {
    const storedValue = Cookies.get(COOKIE_NAME);

    setSteamId(storedValue ?? null);
  }, []);

  const logout = () => {
    Cookies.remove(COOKIE_NAME);
    setSteamId(null);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
