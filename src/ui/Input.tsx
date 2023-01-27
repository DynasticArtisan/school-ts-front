import React, { forwardRef, HTMLProps, useState } from "react";
import cns from "classnames";
import visibleIcon from "../assets/svg/visible.svg";
import invisibleIcon from "../assets/svg/invisible.svg";

interface Props extends HTMLProps<HTMLInputElement> {
  children: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <label className={cns("input", className)}>
        <input
          {...props}
          className={"input__element"}
          type="text"
          ref={ref}
          placeholder=" "
        />
        <span className="input__label">{children}</span>
      </label>
    );
  }
);

export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ children, className, ...props }, ref) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
      <label className={cns("input", className)}>
        <input
          {...props}
          className="input__element"
          type={visible ? "text" : "password"}
          ref={ref}
          placeholder=" "
        />
        <span className="input__label">{children}</span>
        <img
          src={visible ? visibleIcon : invisibleIcon}
          className="input__visible-icon"
          onClick={() => setVisible((v) => !v)}
        />
      </label>
    );
  }
);

export default Input;
