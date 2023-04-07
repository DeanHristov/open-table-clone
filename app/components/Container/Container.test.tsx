import { render } from "@testing-library/react";
import Heading from "../Heading";
import Container from "./index";

describe("Component: <Container {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(
      <Container>
        <Heading title={"Just a test"} />
      </Container>
    );

    expect(container).toMatchSnapshot();
  });

  it("Should be able to render with dynamic width", () => {
    const { container } = render(
      <Container width={"w-[70%]"}>
        <Heading title={"Just a test"} />
      </Container>
    );

    expect(container).toMatchSnapshot();
  });
});
