"use client";
import * as React from "react";
import { FC, ReactNode } from "react";

export interface IHeaderProps {
  height?: string;
  children: ReactNode;
}

const Header: FC<IHeaderProps> = ({ children, height = "" }) => {
  return (
    <header
      className={`${height} flex flex-col md:flex-row md:justify-center md:items-center w-full bg-gradient-to-r from-[#0f1f47] to-[#5f6984] py-8`}
    >
      {children}
    </header>
  );
};

export default Header;
