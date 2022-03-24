import { render, screen, waitFor } from '@testing-library/react';
import { BeerList } from '.';

describe('Header Component', async () => {
  it('should render all the header images', () => {
    render(<BeerList />);

    await waitFor(() => {
      expect(screen.findAllByTestId('beer-item'));
    });
  });
});
