import { render } from 'utils/test';
import Home from './Home';

describe('Home', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
