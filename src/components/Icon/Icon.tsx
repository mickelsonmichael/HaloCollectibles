import { SVGProps } from "react";
import Image from "next/image";

import "./icon.css";
import IconName from "./IconName";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName | "steam" | "xbox";
  size?: number;
};

const Icon = ({ name, size = 1.5, className, ...props }: IconProps) => {
  const isFeather = name != "xbox" && name != "steam";

  return isFeather ? (
    <svg
      className={`icon ` + (className ?? "")}
      {...props}
      height={`${size}cap`}
      width={`${size}cap`}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  ) : (
    <Image
      width={10}
      height={10}
      className={`icon ` + (className ?? "")}
      style={{ height: `${size}cap`, width: `${size}cap` }}
      src={`/${name}.svg`}
      alt={name}
    />
  );
};

export default Icon;
