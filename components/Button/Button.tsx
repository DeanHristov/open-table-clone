import { FC } from "react";

export interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;
