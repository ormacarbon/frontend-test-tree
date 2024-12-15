import { render, screen } from '@testing-library/react';

import { Title } from './Title';
import { roboto } from '@/app/assets/fonts';

describe('Title', () => {
  it('renders without crashing', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const children = 'Test Title';
    render(<Title>{children}</Title>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const className = 'custom-class';
    render(<Title className={className} />);
    expect(screen.getByRole('heading')).toHaveClass(className);
  });

  it('applies HTML attributes correctly', () => {
    const id = 'test-id';
    const dataTestId = 'test-data-testid';
    render(<Title id={id} data-testid={dataTestId} />);
    const titleElement = screen.getByTestId(dataTestId);
    expect(titleElement).toHaveAttribute('id', id);
  });

  it('applies font className correctly', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toHaveClass(roboto.className);
  });

  it('applies multiple classNames correctly', () => {
    const className = 'custom-class';
    render(<Title className={className} />);
    const titleElement = screen.getByRole('heading');
    expect(titleElement).toHaveClass('title-default');
    expect(titleElement).toHaveClass(roboto.className);
    expect(titleElement).toHaveClass(className);
  });
});