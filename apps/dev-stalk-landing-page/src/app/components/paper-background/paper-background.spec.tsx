import { render } from '@testing-library/react';

import PaperBackground from './paper-background';

describe('PaperBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaperBackground />);
    expect(baseElement).toBeTruthy();
  });
});
