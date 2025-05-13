import { LiHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type NavLinkProps = {
  to: string;
  children: ReactNode;
  newWindow?: boolean;
} & LiHTMLAttributes<HTMLLIElement>;

const NavLink = ({
  to,
  children,
  className,
  newWindow = false,
  ...props
}: NavLinkProps) => (
  <li {...props} className={className ?? "flex items-center px-3"}>
    <Link href={to} target={newWindow ? "_blank" : undefined}>
      {children}
    </Link>
  </li>
);

export default NavLink;
