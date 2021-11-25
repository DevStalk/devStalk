import React, { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';

import { EmailFormFields } from 'react-mailchimp-subscribe';
import styles from './waitlist-form-desktop.module.scss';
import Scissors from '../../../assets/components/scissors.png';
import Art from '../../../assets/logo/Icon-Embossed.png';

/* eslint-disable-next-line */
export interface WaitlistFormDesktopProps {
  onClose: () => void;
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

  useEffect(() => {
    gsap.to('.' + styles.waitlistForm__wrapper, { top: '50%' });
  });
  return (
    <div ref={wrapper} className={styles.waitlistForm__wrapper}>
      <div
        className={styles.waitlistForm__close__wrapper}
        onClick={props.onClose}
      >
        <div className={styles.waitlistForm__close}></div>
        <img
          src={Scissors}
          alt="scissors"
          className={styles.waitlistForm__close__scissors}
        ></img>
      </div>
      {props.status !== 'success' ? (
        <form
          className={styles.waitlistForm__form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 className={styles.waitlistForm__title}>Join our waitlist </h2>
            <h4 className={styles.waitlistForm__description}>
              experience the best and find the unknown
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
          <img src={Art} alt="devStalk Logo"></img>
          <h1 className={styles.waitlistForm__success__greeting}>
            Hey devStalker,
          </h1>

          <p className={styles.waitlistForm__success__description}>
            We are excited that you've joined our community &#127881;
            <br />
            <br />
            DevStalk is your place to find opportunities, share knowledge and
            build relationships to achieve your goals.
            <br />
            <br />
            We promise that we won't spam you &#129310;
          </p>
        </div>
      )}
    </div>
  );
}

export default WaitlistFormDesktop;
