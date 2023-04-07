import { render } from "@testing-library/react";
import Header from "./Header";

describe("Component: <Header {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(
      <Header>
        <div />
      </Header>
    );

    expect(container).toMatchSnapshot();
  });
});
