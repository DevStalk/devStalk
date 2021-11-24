import React, { useState, useEffect, useRef } from 'react';

import { EmailFormFields } from 'react-mailchimp-subscribe';
import styles from './waitlist-form-desktop.module.scss';

/* eslint-disable-next-line */
export interface WaitlistFormDesktopProps {
  status: 'error' | 'success' | 'sending' | null;
  message: string | Error | null;
  onValidated: (data: EmailFormFields) => void;
}

export function WaitlistFormDesktop(props: WaitlistFormDesktopProps) {
  const [email, setEmail] = useState('');

  const wrapper = useRef() as React.RefObject<HTMLDivElement>;
  useEffect(() => {
    if (props.status === 'success') clearFields();
  });
  const clearFields = () => {
    setEmail('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email && email.indexOf('@') > -1 && props.onValidated({ EMAIL: email });
  };

  return (
    <div ref={wrapper} className={styles.waitlistForm__wrapper}>
      {props.status !== 'success' ? (
        <form
          className={styles.waitlistForm__form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 className={styles.waitlistForm__title}>Join our waitlist </h2>
            <h4 className={styles.waitlistForm__description}>
              Experience the best & Find the unknown
            </h4>
            {props.status === 'error' && (
              <div className="mc__alert mc__alert--error">{props.message}</div>
            )}
          </div>

          <div className={styles.waitlistForm__field__container}>
            <label className={styles.waitlistForm__field__label}>Email:</label>
            <input
              id="email"
              type="email"
              placeholder="iwant@developeridentity.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
              className={styles.waitlistForm__field}
            />
          </div>
          <input type="submit" className={styles.waitlistForm__submit} />
        </form>
      ) : (
        <div className={styles.waitlistForm__success}>
          <h2 className={styles.waitlistForm__success__title}>
            Welcome to our family,
            <br /> We will update you regularly
          </h2>
        </div>
      )}
    </div>
  );
}

export default WaitlistFormDesktop;
