import { MouseEventHandler } from "react";

export type MyButtonType = {
  label: string;
  size?: "lg" | "md" | "sm";
  btnType?: "primary" | "secondary" | "ghost";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: "soft" | "hard";
  isActive?: boolean;
  isDisabled?: boolean;
  className?: string;
  styles?: object;
};
