import { render, waitFor } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Component: <Button {...} />", () => {
  it("Should be able to render default state", () => {
    const { container } = render(<Button title="click me" />);

    expect(container).toMatchSnapshot();
  });

  it("Should be able to render the blue state", () => {
    const { container } = render(<Button blue title="click me" />);

    expect(container).toMatchSnapshot();
  });

  it("Should be able to render the white state", () => {
    const { container } = render(<Button white title="click me" />);

    expect(container).toMatchSnapshot();
  });

  it("Should be able to render the red state", () => {
    const { container } = render(<Button red title="click me" />);

    expect(container).toMatchSnapshot();
  });

  it("Should be able to trigger a click event", async () => {
    const mockClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockClick} title="click me" />
    );

    const $button: HTMLElement = getByText("click me");
    await waitFor(() => userEvent.click($button));

    expect(mockClick).toBeCalled();
  });
});
