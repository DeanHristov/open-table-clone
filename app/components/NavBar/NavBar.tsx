"use client";

import { FC } from "react";
import Logo from "../Logo";
import Button from "../Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export interface INavBarProps {}

const NavBar: FC<INavBarProps> = ({}) => {
  return (
    <nav className="bg-white p-1 flex justify-between">
      <Logo />
      <div className="flex">
        <Button blue title="Sign in" />
        <Button title="Sign up" />
        <div className="flex items-center px-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-black inline-block cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
