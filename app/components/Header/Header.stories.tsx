import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Header, { IHeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default: Story<IHeaderProps> = (args) => <Header {...args} />;
export const Search: Story<IHeaderProps> = (args) => <Header {...args} />;

Default.args = {
  height: "h-64",
};
Search.args = {};
