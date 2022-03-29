import { render } from '@testing-library/react';
import { SideBar } from '.';

describe('Header Component', async () => {
  it('should render all the header images', () => {
    render(<SideBar />);
  });
});
