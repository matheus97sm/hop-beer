import { render, screen } from '@testing-library/react';
import { BeerList } from '.';

describe('Beer List component', () => {
  it('should render at least one beer', () => {
    render(<BeerList />);

    expect(screen.findByText('IBU'));
  });
});
