import { render, screen } from "@testing-library/react";

import { Text } from "./Text";
import { roboto } from "@/app/assets/fonts";

describe("Text component", () => {
  it("renders without errors", () => {
    render(<Text />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const text = "Hello, world!";
    render(<Text>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("applies className correctly", () => {
    const className = "custom-class";
    render(<Text className={className} />);
    expect(screen.getByRole("paragraph")).toHaveClass(className);
  });

  it("applies HTML attributes correctly", () => {
    const dataTestId = "text-paragraph";
    render(<Text data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it("applies default text styles", () => {
    render(<Text />);
    expect(screen.getByRole("paragraph")).toHaveClass("text-default");
  });

  it("applies font styles correctly", () => {
    render(<Text />);
    expect(screen.getByRole("paragraph")).toHaveClass(roboto.className);
  });

  it("applies multiple classNames correctly", () => {
    const className = "custom-class";
    render(<Text className={className} />);
    expect(screen.getByRole("paragraph")).toHaveClass("text-default");
    expect(screen.getByRole("paragraph")).toHaveClass(roboto.className);
    expect(screen.getByRole("paragraph")).toHaveClass(className);
  });
});