import { render } from '@testing-library/react';

import SanMessageCard from './SanMessageCard';

describe('SanMessageCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SanMessageCard />);
    expect(baseElement).toBeTruthy();
  });
});
