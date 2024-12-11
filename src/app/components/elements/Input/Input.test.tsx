// import { render, screen, fireEvent } from '@testing-library/react';
// import { Input } from './Input';

// describe('Input component', () => {

//   const mockProps = {
//     error: true,
//     type: 'text',
//     id: 'test-input',
//     name: 'test-input',
//     label: 'Test Label',
//     linkLabel: 'Test Link Label',
//     placeholder: 'Test Placeholder',
//     helperText: 'Test Error Message',
//     children: <div>Test Children</div>,
//   };

//   test('renders label if provided', () => {
//     render(<Input label={mockProps.label} />);
//     expect(screen.getByText(mockProps.label)).toBeInTheDocument();
//   });

//   test('renders link label if provided', () => {
//     render(<Input linkLabel={mockProps.linkLabel} />);
//     expect(screen.getByText(mockProps.linkLabel)).toBeInTheDocument();
//   });

//   test('renders error message if error prop is provided', () => {
//     render(<Input error={mockProps.error} helperText={mockProps.helperText} />);
//     expect(screen.getByText(mockProps.helperText)).toBeInTheDocument();
//   });

//   test('renders children if provided', () => {
//     render(<Input >{mockProps.children}</Input>);
//     expect(screen.getByText('Test Children')).toBeInTheDocument();
//   });

//   test('triggers preventDefault on mouse down event for children', () => {
//     render(<Input >{mockProps.children}</Input>);
//     const childElement = screen.getByText('Test Children');
//     fireEvent.mouseDown(childElement);
//     expect(childElement).not.toHaveFocus();
//   });

//   test('passes remaining props to input element', () => {
//     render(<Input {...mockProps} />);
//     const inputElement = screen.getByPlaceholderText('Test Placeholder');
//     expect(inputElement).toBeInTheDocument();
//     expect(inputElement).toHaveAttribute('id', 'test-input');
//     expect(inputElement).toHaveAttribute('name', 'test-input');
//     expect(inputElement).toHaveAttribute('type', 'text');
//   });
// });