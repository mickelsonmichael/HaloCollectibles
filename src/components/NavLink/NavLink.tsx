import { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <li className="flex items-center px-3">
    <Link href={to}>{children}</Link>
  </li>
);

export default NavLink;
