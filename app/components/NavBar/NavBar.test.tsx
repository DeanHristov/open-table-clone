import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Component: <NavBar {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(<NavBar />);

    expect(container).toMatchSnapshot();
  });
});
