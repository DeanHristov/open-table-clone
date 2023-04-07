import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { IButtonProps } from "./Button";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default: Story<IButtonProps> = (args) => <Button {...args} />;
export const WithIcon: Story<IButtonProps> = (args) => <Button {...args} />;

Default.args = {
  title: "Click me!",
  medium: false,
  blue: false,
  red: false,
  disabled: false,
  white: false,
};

WithIcon.args = {
  title: "Click me!",
  icon: <ArrowTrendingUpIcon className="h-6 w-6 text-black inline-block" />,
  medium: false,
  blue: false,
  red: false,
  disabled: false,
  white: false,
};
