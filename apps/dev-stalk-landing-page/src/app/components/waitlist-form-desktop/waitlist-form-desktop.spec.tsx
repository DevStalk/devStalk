import { render } from '@testing-library/react';

import WaitlistFormDesktop from './waitlist-form-desktop';

describe('WaitlistFormDesktop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WaitlistFormDesktop />);
    expect(baseElement).toBeTruthy();
  });
});
