import styles from './mailchimp-form-container.module.scss';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import WaitlistForm from '../waitlist-form/waitlist-form';
import WaitlistFormDesktop from '../waitlist-form-desktop/waitlist-form-desktop';

/* eslint-disable-next-line */
export interface MailchimpFormContainerProps {
  onClose: () => void;
  type: string;
}

export function MailchimpFormContainer(props: MailchimpFormContainerProps) {
  // const postUrl = `https://gmail.us6.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  const postUrl = `https://gmail.us6.list-manage.com/subscribe/post?u=b10951f32f4846a0956320b0e&id=56144d7640`;

  return (
    <div className={styles.mailchimp__formContainer}>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) =>
          props.type === 'Mobile' ? (
            <WaitlistForm
              status={status}
              message={message}
              onValidated={(formData: EmailFormFields) => subscribe(formData)}
            />
          ) : (
            <WaitlistFormDesktop
              status={status}
              message={message}
              onValidated={(formData: EmailFormFields) => subscribe(formData)}
              onClose={props.onClose}
            />
          )
        }
      />
    </div>
  );
}

export default MailchimpFormContainer;
