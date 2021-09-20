import { render } from '@testing-library/react';

import MailchimpFormContainer from './mailchimp-form-container';

describe('MailchimpFormContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MailchimpFormContainer />);
    expect(baseElement).toBeTruthy();
  });
});
