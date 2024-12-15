import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/app/components/elements";

describe("Button component", () => {
  const mockProps = {
    loading: false,
    text: "Click me!",
    onClick: jest.fn(),
    className: "loading loading-spinner",
  };
  test("should render without crashing", () => {
    render(<Button>{mockProps.text}</Button>);
    expect(screen.getByText(mockProps.text)).toBeTruthy();
  });

  test("should can click in button", () => {
    render(<Button onClick={mockProps.onClick}>{mockProps.text}</Button>);
    fireEvent.click(screen.getByText(mockProps.text));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  test("should can't click in button", () => {
    render(<Button disabled>{mockProps.text}</Button>);
    userEvent.click(screen.getByText(mockProps.text));
    expect(screen.getByText(mockProps.text).closest("button")).toHaveAttribute(
      "disabled"
    );
  });

  test("style Button component class btn default", async () => {
    render(<Button onClick={mockProps.onClick}>{mockProps.text}</Button>);
    await waitFor(() => {
      const button = screen.getByText(mockProps.text);
      expect(button).toHaveClass("btn");
    });
  });

  it("renders loading spinner when loading is true", () => {
    render(<Button loading className={mockProps.className} />);
    expect(screen.getByRole("button")).toHaveClass("loading");
    expect(screen.getByRole("button")).toHaveClass("loading-spinner");
  });

  it("does not render loading spinner when loading is false", () => {
    render(<Button {...mockProps} className="" />);
    expect(screen.queryByRole("button")).not.toHaveClass("loading");
    expect(screen.queryByRole("button")).not.toHaveClass("loading-spinner");
  });
});
