import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Component: <Logo {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
