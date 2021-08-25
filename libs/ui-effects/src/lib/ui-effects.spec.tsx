import { render } from '@testing-library/react';

import UiEffects from './ui-effects';

describe('UiEffects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiEffects />);
    expect(baseElement).toBeTruthy();
  });
});
