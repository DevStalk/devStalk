import React, { useState, useEffect } from 'react';
import { EmailFormFields } from 'react-mailchimp-subscribe';
import styles from './waitlist-form.module.scss';
import gsap from 'gsap';

/* eslint-disable-next-line */
export interface WaitlistFormProps {
  status: 'error' | 'success' | 'sending' | null;
  message: string | Error | null;
  onValidated: (data: EmailFormFields) => void;
}

export function WaitlistForm(props: WaitlistFormProps) {
  const [email, setEmail] = useState('');

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

  useEffect(() => {
    gsap.to('.' + styles.waitlistForm__wrapper, {
      top: '-20vh',
      ease: 'power3.out',
    });
  });
  return (
    <div className={styles.waitlistForm__wrapper}>
      {props.status !== 'success' ? (
        <form
          className={styles.waitlistForm__form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2 className={styles.waitlistForm__title}>
            Join our waitlist to experience the best and find the unknown
          </h2>
          {/* {props.status === 'error' && (
            <div className="mc__alert mc__alert--error">{props.message}</div>
          )} */}
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
          <h2 className={styles.waitlistForm__title}>
            Thanks for joining our family we will let update you regularly
          </h2>
        </div>
      )}
    </div>
  );
}

export default WaitlistForm;
