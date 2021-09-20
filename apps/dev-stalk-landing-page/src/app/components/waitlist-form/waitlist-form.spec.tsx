import { render } from '@testing-library/react';

import WaitlistForm from './waitlist-form';

describe('WaitlistForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WaitlistForm />);
    expect(baseElement).toBeTruthy();
  });
});
