import { render } from '@testing-library/react';

import SanInput from './SanInput';

describe('SanInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SanInput />);
    expect(baseElement).toBeTruthy();
  });
});
