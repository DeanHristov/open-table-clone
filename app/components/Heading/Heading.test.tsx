import { render } from "@testing-library/react";
import Heading from "../Heading";

describe("Component: <Heading {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(<Heading title={"Some title"} />);

    expect(container).toMatchSnapshot();
  });

  it("Should be able to render the secondary state", () => {
    const { container } = render(<Heading secondary title={"Some title"} />);

    expect(container).toMatchSnapshot();
  });
});
