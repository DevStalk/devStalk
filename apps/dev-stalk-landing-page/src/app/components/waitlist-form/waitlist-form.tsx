import React, { useState, useEffect, useRef } from 'react';
import { EmailFormFields } from 'react-mailchimp-subscribe';
import styles from './waitlist-form.module.scss';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

/* eslint-disable-next-line */
export interface WaitlistFormProps {
  status: 'error' | 'success' | 'sending' | null;
  message: string | Error | null;
  onValidated: (data: EmailFormFields) => void;
}

export function WaitlistForm(props: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

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

  useEffect(() => {
    gsap.to('.' + styles.waitlistForm__wrapper, {
      bottom: 0,
      ease: 'power3.out',
    });
  });

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
          </div>
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
