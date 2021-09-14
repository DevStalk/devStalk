import { render } from '@testing-library/react';

import TextSplitting from './text-splitting';

describe('TextSplitting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextSplitting />);
    expect(baseElement).toBeTruthy();
  });
});
