import { render } from '@testing-library/react';

import LetterAnimation from './letter-animation';

describe('LetterAnimation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LetterAnimation />);
    expect(baseElement).toBeTruthy();
  });
});
