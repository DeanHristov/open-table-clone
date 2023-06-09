import * as React from "react";
import { ReactNode } from "react";

import NavBar from "./components/NavBar";
import TopNav, { ITopNavLink } from "./components/TopNav";
import "./globals.css";

// Adding MSW.IO
import "../mocks";

export const metadata = {
  title: "Open table | Clone",
  description: "Generated by create next app",
};

const navigationItems: ITopNavLink[] = [
  { title: "For Businesses", url: "" },
  { title: "Mobile", url: "" },
  { title: "FAQ", url: "" },
];
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-100 w-screen h-screen">
          <main className="max-w-screen-2xl h-screen m-auto bg-white">
            <TopNav links={navigationItems} />
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
