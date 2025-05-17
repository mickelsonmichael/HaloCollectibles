import { LiHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import Icon, { IconName } from "@/components/Icon";

type NavLinkProps = {
  to: string;
  children: ReactNode;
  newWindow?: boolean;
  icon?: IconName;
} & LiHTMLAttributes<HTMLLIElement>;

const NavLink = ({
  to,
  children,
  className,
  icon = undefined,
  newWindow = false,
  ...props
}: NavLinkProps) => (
  <li {...props} className={className ?? "flex items-center px-3"}>
    <Link href={to} target={newWindow ? "_blank" : undefined}>
      {icon && (
        <Icon name={icon} className="mr-2" />
      )}
      {children}
    </Link>
  </li>
);

export default NavLink;
