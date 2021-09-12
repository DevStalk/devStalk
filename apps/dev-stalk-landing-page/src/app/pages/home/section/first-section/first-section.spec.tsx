import { render } from '@testing-library/react';

import FirstSection from './first-section';

describe('FirstSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstSection />);
    expect(baseElement).toBeTruthy();
  });
});
