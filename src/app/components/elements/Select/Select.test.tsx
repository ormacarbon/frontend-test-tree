import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders without error', () => {
    render(<Select options={options} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  it('renders label if provided', () => {
    render(<Select label="Select an option" options={options} />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders default option if provided', () => {
    render(<Select defaultOption="Select an option" options={options} />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders options correctly', () => {
    render(<Select options={options} />);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange callback when an option is selected', () => {
    const handleChange = jest.fn();
    render(<Select label='Select' options={options} onChange={handleChange} />);
    
    fireEvent.change(screen.getByLabelText('Select'), {
      target: { value: 'option2' },
    });
  
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'option2' }),
    }));
  });

  it('renders error message if error prop is true', () => {
    render(<Select options={options} error helperText="Invalid option" />);
    expect(screen.getByText('Invalid option')).toBeInTheDocument();
  });
});
