import * as React from "react";
import { Meta, Story } from "@storybook/react";
import NavBar, { INavBarProps } from "./NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as Meta;

export const Default: Story<INavBarProps> = (args) => <NavBar {...args} />;

Default.args = {};
