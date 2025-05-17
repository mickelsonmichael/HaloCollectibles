"use client";

import Link from "next/link";

import useToggle from "@/hooks/useToggle";
import NavLink from "@/components/NavLink";
import Icon from "@/components/Icon";
import LoginButton from "@/components/LoginButton";

const Navigation = () => {
  const { isOn: menuOpen, toggle: toggleMenu } = useToggle();

  return (
    <div className="flex flex-col md:flex-row py-4 bg-white/5 mb-4">
      <header className="flex mb-2 pl-4 pr-4 md:mb-auto md:pr-8">
        <Link href="/">
          <h1 className="text-xl">Halo MCC Collectibles</h1>
        </Link>

        <div className="ml-auto md:hidden">
          <button
            onClick={toggleMenu}
            className={`
                rounded-sm
                border-1
                border-white/30
                px-1
                ${menuOpen ? "bg-white/10" : ""}
            `}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <nav
        className={`
            flex-grow-1
            flex-col
            gap-1
            mt-3
            md:flex
            md:flex-row
            md:mt-0
            ${menuOpen ? "flex" : "hidden"}
        `}
      >
        <ul className="flex gap-1 flex-col md:flex-row">
          <NavLink icon="award" to="/achievements">Achievements</NavLink>
          <NavLink icon="dribbble" to="/skulls">Skulls</NavLink>
        </ul>
        <ul className="flex flex-col gap-1 md:flex-row md:ml-auto">
          <LoginButton />

          <NavLink
            to="https://github.com/mickelsonmichael/HaloCollectibles"
            title="GitHub"
            newWindow
          >
            <Icon name="github" />
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
