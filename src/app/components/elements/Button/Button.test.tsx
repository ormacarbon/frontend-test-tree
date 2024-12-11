import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/app/components/elements";

describe("Button component", () => {
  const mockProps = {
    text: "Click me!",
    onClick: jest.fn(),
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

});
