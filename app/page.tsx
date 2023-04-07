import { Inter } from "next/font/google";
import Header from "./components/Header";
import * as React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

require("../mocks");

export default function Home() {
  return (
    <Header height="md:h-64">
      <div className="md:pr-4">
        <Input placeholder="Type location..." />
      </div>
      <Button red medium title={"Let's go"} />
    </Header>
  );
}
