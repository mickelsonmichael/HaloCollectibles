import { SVGProps } from "react";

import "./icon.css";

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
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
