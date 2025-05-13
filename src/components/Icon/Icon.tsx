import { SVGProps } from "react";

import "./icon.css";
import IconName from "./IconName";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const Icon = ({ name, size = 1.5, className, ...props }: IconProps) => (
  <svg
    className={`icon ${className}`}
    {...props}
    height={`${size}cap`}
    width={`${size}cap`}
  >
    <use href={`/icons.svg#${name}`} />
  </svg>
);

export default Icon;
