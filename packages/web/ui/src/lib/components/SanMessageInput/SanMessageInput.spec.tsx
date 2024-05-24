import { render } from '@testing-library/react';

import SanMessageInput from './SanMessageInput';

describe('SanMessageInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SanMessageInput />);
    expect(baseElement).toBeTruthy();
  });
});
