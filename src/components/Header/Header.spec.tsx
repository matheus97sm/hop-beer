import { render } from '@testing-library/react';
import { Header } from '.';

describe('Header Component', () => {
  it('should render all the header images', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText('Brand Hop Beer')).not.toBeNull();
    expect(getByAltText('Instagram Matheus Fonseca')).not.toBeNull();
    expect(getByAltText('Linkedin Matheus Fonseca')).not.toBeNull();
  });

  it('should render the social midia links correctly', () => {
    const { getByTitle } = render(<Header />);

    expect(getByTitle('Go to Instagram')).toBeInTheDocument();
    expect(getByTitle('Go to Instagram')).toHaveAttribute(
      'href',
      'https://instagram.com/matheus97sm'
    );
    expect(getByTitle('Go to Linkedin')).toBeInTheDocument();
    expect(getByTitle('Go to Linkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/matheus97sm/'
    );
  });
});
