"use client";

import { FC, ReactNode } from "react";
import classNames from "classnames";

export interface IButtonProps {
  title: string;
  icon?: ReactNode;
  medium?: boolean;
  red?: boolean;
  blue?: boolean;
  white?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  title,
  icon,
  medium = false,
  blue = false,
  red = false,
  white = false,
  disabled = false,
  onClick = () => {},
}) => {
  const baseStyles = [
    "rounded w-full px-4 py-2 text-center text-sm",
    "transition-all duration-300",
    "hover:shadow-md cursor-pointer",
    "disabled:cursor-not-allowed",
  ];
  const styles = classNames(baseStyles, {
    "bg-shades-100 text-white hover:bg-shades-200": blue,
    "bg-white border border-red-600 text-red-500": white,
    "bg-red-600 text-white hover:bg-red-700": red,
    "bg-white hover:bg-gray-50 border text-black": !blue && !white && !red,
    "h-12 min-w-[132px]": medium,
  });

  // TODO Fix it -> Unhandled Runtime Error
  // Error: Hydration failed because the initial UI does not match what was rendered on the server.

  return (
    <div className="p-1 h-auto">
      <button disabled={disabled} onClick={onClick} className={styles}>
        {icon} {title}
      </button>
    </div>
  );
};

export default Button;
