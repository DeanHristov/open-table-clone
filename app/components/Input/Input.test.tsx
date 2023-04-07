import { render } from "@testing-library/react";
import Input from "./Input";

describe("Component: <Input {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(<Input placeholder="search location" />);

    expect(container).toMatchSnapshot();
  });
});
