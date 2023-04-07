import { render } from "@testing-library/react";
import TopNav from "../TopNav";

describe("Component: <TopNav  {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(
      <TopNav
        links={[
          { title: "For Businesses", url: "" },
          { title: "Mobile", url: "" },
          { title: "FAQ", url: "" },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
