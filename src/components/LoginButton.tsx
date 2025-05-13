"use client";

import { useCookies } from "react-cookie";

import NavLink from "@/components/NavLink";

const LoginButton = () => {
  const [cookies, , removeCookie] = useCookies(["STEAM_USER_ID"]);
  console.log(cookies);
  const isLoggedIn = cookies.STEAM_USER_ID != null;

  return isLoggedIn ? (
    <button
      className="cursor-pointer"
      onClick={() => removeCookie("STEAM_USER_ID")}
    >
      Logout
    </button>
  ) : (
    <NavLink to="/api/auth">Login</NavLink>
  );
};

export default LoginButton;
