import { render } from '@testing-library/react';
import { Footer } from '.';

describe('Footer Component', () => {
  it('should render the text correctly', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Developed by:')).toBeInTheDocument();
    expect(getByText('Matheus Fonseca.')).toBeInTheDocument();
    expect(getByText('Matheus Fonseca.')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/matheus97sm/'
    );
  });
});
