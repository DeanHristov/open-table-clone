import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Heading, { IHeadingProps } from "./index";

export default {
  title: "Components/Heading",
  component: Heading,
} as Meta;

export const Default: Story<IHeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  title: "Heading title",
  secondary: false,
};
