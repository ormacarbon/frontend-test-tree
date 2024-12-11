import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const defaultProps = {
    options: options,
    title: 'Select an option',
    defaultOption: 'Choose an option',
  };

  test('renders the select component with default props', () => {
    render(<Select {...defaultProps} />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    
    const defaultOptionElement = screen.getByText('Choose an option');
    expect(defaultOptionElement).toBeInTheDocument();
    
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(4); // 3 options + default option
  });

  test('renders the select component without a title', () => {
    const props = { ...defaultProps, title: undefined };
    render(<Select {...props} />);
    
    const labelElement = screen.queryByTestId('label');
    expect(labelElement).not.toBeInTheDocument();
  });

  test('renders the select component without a default option', () => {
    const props = { ...defaultProps, defaultOption: undefined };
    render(<Select {...props} />);
    
    const defaultOptionElement = screen.queryByText('Choose an option');
    expect(defaultOptionElement).not.toBeInTheDocument();
  });

  test('calls the onChange event handler when an option is selected', () => {
    const handleChange = jest.fn();
    const props = { ...defaultProps, onChange: handleChange };
    render(<Select {...props} />);
  
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'option1' } });
  
    expect(handleChange).toHaveBeenCalledTimes(1);
  
    // Aqui verificamos que o valor do target é 'option1'
    expect(handleChange.mock.calls[0][0].target.value).toBe('option1');
  });

  test('has accessible role and label', () => {
    render(<Select {...defaultProps} />);
    
    const selectElement = screen.getByRole('combobox', { name: 'Select an option' });
    expect(selectElement).toBeInTheDocument();
  });

  test('displays the selected option', () => {
    render(<Select {...defaultProps} />);
    
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: 'option2' } });
    
    expect(selectElement.value).toBe('option2');
  });

  test('renders all options', () => {
    render(<Select {...defaultProps} />);
    
    options.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test('renders only default option when no options are provided', () => {
    render(<Select {...defaultProps} options={[]} />);
    
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(1);
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  test('renders the placeholder correctly', () => {
    const props = { ...defaultProps, defaultOption: 'Select something...' };
    render(<Select {...props} />);
    
    const placeholderOption = screen.getByText('Select something...');
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toHaveAttribute('value', '');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Select {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});