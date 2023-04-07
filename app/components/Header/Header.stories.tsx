import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Header, { IHeaderProps } from "./Header";
import Input from "../Input";
import Button from "../Button";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default: Story<IHeaderProps> = (args) => (
  <Header {...args}>
    <div className="pr-4">
      <Input placeholder="Type location..." />
    </div>
    <Button red medium title={"Let's go"} />
  </Header>
);
export const Search: Story<IHeaderProps> = (args) => (
  <Header {...args}>
    <div className="pr-4">
      <Input placeholder="Type location..." />
    </div>
    <Button red medium title={"Let's go"} />
  </Header>
);

Default.args = {
  height: "h-64",
};
Search.args = {};
