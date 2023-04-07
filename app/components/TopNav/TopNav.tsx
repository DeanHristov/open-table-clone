"use client";

import { FC } from "react";
import Link from "next/link";

export interface ITopNavLink {
  title: string;
  url: string;
}

export interface ITopNavProps {
  links: ITopNavLink[];
}

const TopNav: FC<ITopNavProps> = ({ links }) => {
  return (
    <nav className="bg-gray-200 p-2 flex justify-end">
      <ul className="flex">
        {links.map((item, idx) => (
          <li
            key={`top-nav-item-${idx}`}
            className="text-xs cursor-pointer px-2 m-0"
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
