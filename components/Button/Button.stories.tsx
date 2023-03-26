import * as React from "react";
import {Meta, Story} from "@storybook/react";
import Button, {IButton} from "./Button"

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        actions: {
            handles: ["click"],
        },
    },
    argTypes: {},
} as Meta;

export const Default: Story<IButton> = (args) => <Button {...args} />;

Default.args = {
    title: "Click me!"
};
