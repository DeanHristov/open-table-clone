import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Logo, { ILogoProps } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
} as Meta;

export const Default: Story<ILogoProps> = (args) => <Logo {...args} />;

Default.args = {
  width: 200,
  href: "/",
};
