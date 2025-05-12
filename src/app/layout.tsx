import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import NavLink from "@/components/NavLink/NavLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halo MCC Collectibles",
  description:
    "Site for tracking the Halo Master Chief Collection achievements, skulls, and more.",
};

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body className="antialiased">
      <div className="flex flex-col">
        <div className="flex flex-row py-4 bg-white/5 mb-4">
          <header className="pl-4 pr-8">
            <Link href="/">
              <h1 className="text-xl">Halo MCC Collectibles</h1>
            </Link>
          </header>

          <nav className="flex ml-auto">
            <ul className="flex">
              <NavLink to="/achievements">Achievements</NavLink>
            </ul>
          </nav>
        </div>
        <main className="py-4 px-8">{children}</main>
      </div>
    </body>
  </html>
);

export default RootLayout;
