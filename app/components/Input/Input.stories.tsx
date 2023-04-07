import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Input, { IInputProps } from "./index";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

export const Default: Story<IInputProps> = (args) => (
  <Input placeholder={"Type location..."} {...args} />
);

Default.args = {};
