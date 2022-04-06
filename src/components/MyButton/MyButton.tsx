import React from "react";
import { MyButtonType } from "./MyButton.types";
import "./MyButton.css";

const MyButton: React.FC<MyButtonType> = (props) => {
  const {
    label,
    className,
    btnType,
    onClick,
    size,
    rounded,
    isActive,
    styles,
    isDisabled
  } = props;

  return (
    <button
      className={`button
          ${className ? className : null}
          ${btnType ? btnType : null}
          ${size ? `button-${size}` : null}
          ${`button-${rounded}`}
          ${isActive === true ? "active" : null}
          ${isDisabled === true ? "disabled" : null}
          `}
      disabled={isDisabled ?? false}
      onClick={onClick}
      style={styles}
    >
      {label}
    </button>
  );
};

export default MyButton;
