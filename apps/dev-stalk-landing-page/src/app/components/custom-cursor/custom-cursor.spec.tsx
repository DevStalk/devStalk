import { render } from '@testing-library/react';

import CustomCursor from './custom-cursor';

describe('CustomCursor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomCursor />);
    expect(baseElement).toBeTruthy();
  });
});
