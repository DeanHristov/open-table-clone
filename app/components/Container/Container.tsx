import { FC, ReactNode } from "react";
import classNames from "classnames";

export interface IContainerProps {
  children: ReactNode;
  width?: string;
}

const Container: FC<IContainerProps> = ({ children, width = "w-auto" }) => {
  const defaultStyles = [
    `bg-white w-full ${width} rounded p-3`,
    "shadow border border-gray-200",
  ];
  return <div className={classNames(defaultStyles)}>{children}</div>;
};

export default Container;
