import styles from './cta-button.module.scss';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { PortalModal } from '../portal-modal/portal-modal';
import { MailchimpFormContainer } from '../mailchimp-form-container/mailchimp-form-container';

/* eslint-disable-next-line */
export interface CtaButtonProps {}

export function CtaButton(props: CtaButtonProps) {
  ///// State Management ////////////////
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  const [input, setInput] = useState('');

  ///// UI ELements ////////////////////
  const ForDesktopOrLaptop = () => {
    const [clicked, setClicked] = useState(false);
    return (
      <div
        className={`${styles.cta} ${styles.cta_d} ${
          clicked ? styles.cta_d__trans : ''
        }`}
      >
        <input
          className={`${styles.cta_d__input} ${
            clicked ? styles.cta_d__input__clicked : ''
          } `}
          placeholder="iwant@developeridentity.com"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <a
          onClick={(e) => {
            if (clicked) {
              if (input === '') {
                setClicked(false);
              } else {
                console.log('done');
              }
            } else {
              setClicked(true);
            }
          }}
          className={styles.cta__button}
        >
          Join Waitlist
        </a>
      </div>
    );
  };

  const ForTabletOrMobile = () => {
    const [formOpen, setFormOpen] = useState(false);
    const formHandler = () => {
      setFormOpen(false);
    };
    return (
      <div className={`${styles.cta} ${styles.cta_m}`}>
        <a
          // href="/"
          className={styles.cta__button}
          onClick={() => {
            setFormOpen(true);
          }}
        >
          Join Waitlist
        </a>
        <PortalModal open={formOpen} onClose={formHandler}>
          <MailchimpFormContainer />
        </PortalModal>
      </div>
    );
  };
  //////////////////////////////////////////////////

  return isTabletOrMobile ? <ForTabletOrMobile /> : <ForDesktopOrLaptop />;
}

export default CtaButton;
