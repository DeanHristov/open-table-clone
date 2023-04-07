import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Container, { IContainerProps } from "./index";
import Heading from "../Heading";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

export const Restaurant: Story<IContainerProps> = (args) => (
  <Container {...args}>
    <Heading large title={"Milesstone Grill"} />
    <div className="mt-4">
      <Heading secondary title={"X photos"} />
    </div>
  </Container>
);

Restaurant.args = {
  width: "md:w-[70%]",
};
