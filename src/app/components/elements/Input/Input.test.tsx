import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {

  const mockProps = {
    error: false,
    type: 'text',
    maxLength: 50,
    id: 'test-input',
    name: 'test-input',
    value: 'Test value',
    label: 'Test Label',
    className: 'input_test',
    placeholder: 'Test Placeholder',
    helperText: 'Test Error Message',
  };

  it("renders without errors", () => {
    render(<Input />);
  });

  test('renders label if provided', () => {
    render(<Input label={mockProps.label} />);
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });

  it("renders the input element", () => {
    const { getByRole } = render(<Input />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("passes value prop to the input element", () => {
    const { getByRole } = render(<Input value={mockProps.value} />);
    expect(getByRole("textbox")).toHaveValue(mockProps.value);
  });

  it("calls onChange callback when input value changes", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Input onChange={handleChange} />);
    fireEvent.change(getByRole("textbox"), { target: { value: mockProps.value } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("passes maxLength prop to the input element", () => {
    const { getByRole } = render(<Input maxLength={mockProps.maxLength} />);
    expect(getByRole("textbox")).toHaveAttribute("maxLength", "50");
  });

  test('renders error message if error prop is provided', () => {
    render(<Input error={!mockProps.error} helperText={mockProps.helperText} />);
    expect(screen.getByText(mockProps.helperText)).toBeInTheDocument();
  });

  it("does not render the error message if error prop is false", () => {
    const { queryByText } = render(<Input helperText="Invalid input" />);
    expect(queryByText("Invalid input")).toBeNull();
  });

  it("applies the className prop to the label element", () => {
    const { container } = render(<Input className="custom-input" />);
    expect(container.querySelector(".form-control")).toHaveClass("custom-input");
  });

  test('passes remaining props to input element', () => {
    render(<Input {...mockProps} />);
    const inputElement = screen.getByPlaceholderText(mockProps.placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', mockProps.id);
    expect(inputElement).toHaveAttribute('name', mockProps.name);
    expect(inputElement).toHaveAttribute('type', mockProps.type);
  });
});