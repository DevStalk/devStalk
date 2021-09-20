import { render } from '@testing-library/react';

import PortalModal from './portal-modal';

describe('PortalModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortalModal />);
    expect(baseElement).toBeTruthy();
  });
});
