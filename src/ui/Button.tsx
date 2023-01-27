import React, { ButtonHTMLAttributes, FC } from "react";
import cns from "classnames";

import * as Icons from "../assets/svg/btn-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: keyof typeof Icons;
}

const Button: FC<Props> = ({
  children,
  icon = "proceed",
  className,
  ...props
}) => {
  return (
    <button {...props} className={cns("button", className)}>
      {children}
      <img src={Icons[icon]} alt={children} className="button__icon" />
    </button>
  );
};

export default Button;
