import { render, screen } from 'utils/test';
import Home from './Home';

describe('Home', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
