import React, { forwardRef, HTMLProps, useState } from "react";
import cns from "classnames";
import visibleIcon from "../assets/svg/visible.svg";
import invisibleIcon from "../assets/svg/invisible.svg";

interface Props extends HTMLProps<HTMLInputElement> {
  children: string;
  invalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ children, className, invalid = false, ...props }, ref) => {
    return (
      <label className={cns("input", className)}>
        <input
          {...props}
          className={cns("input__element", { input__element_invalid: invalid })}
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
  ({ children, className, invalid = false, ...props }, ref) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
      <label className={cns("input", className)}>
        <input
          {...props}
          className={cns("input__element", { input__element_invalid: invalid })}
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
