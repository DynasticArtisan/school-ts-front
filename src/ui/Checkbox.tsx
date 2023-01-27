import React, { forwardRef, InputHTMLAttributes } from "react";
import cns from "classnames";
import checkedIcon from "../assets/svg/checkbox-icon.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  view?: "small";
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ className, view, ...props }, ref) => {
    return (
      <label
        className={cns(className, "checkbox", {
          checkbox_small: view == "small",
        })}
      >
        <input
          {...props}
          ref={ref}
          type="checkbox"
          className="checkbox__input"
        />
        <div className="checkbox__square">
          <img
            src={checkedIcon}
            className="checkbox__checked-icon"
            alt="Выбрано"
          />
        </div>
      </label>
    );
  }
);

export default Checkbox;
