import { FC, ReactNode } from "react";

export interface IHeaderProps {
  children: ReactNode;
  height?: string;
}

const Header: FC<IHeaderProps> = ({ children, height = "" }) => {
  return (
    <header
      className={`${height} flex justify-center items-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] py-8`}
    >
      {children}
    </header>
  );
};

export default Header;
