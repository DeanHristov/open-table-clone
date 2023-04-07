import * as React from "react";
import { FC } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

export interface ISearchPageProps {}

const SearchPage: FC<ISearchPageProps> = () => {
  return (
    <>
      <Header>
        <div className="md:pr-4">
          <Input placeholder="Type location..." />
        </div>
        <Button red medium title={"Let's go"} />
      </Header>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2"></div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start"></div>
    </>
  );
};

export default SearchPage;
