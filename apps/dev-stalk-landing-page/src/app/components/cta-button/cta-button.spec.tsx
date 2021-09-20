import { render } from '@testing-library/react';

import CtaButton from './cta-button';

describe('CtaButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaButton />);
    expect(baseElement).toBeTruthy();
  });
});
