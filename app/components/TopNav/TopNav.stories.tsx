import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TopNav, { ITopNavProps } from "./TopNav";

export default {
  title: "Components/TopNav",
  component: TopNav,
} as Meta;

export const Default: Story<ITopNavProps> = (args) => <TopNav {...args} />;

Default.args = {
  links: [
    { title: "For Businesses", url: "" },
    { title: "Mobile", url: "" },
    { title: "FAQ", url: "" },
  ],
};
