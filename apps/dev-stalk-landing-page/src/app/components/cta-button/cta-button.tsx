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

  const [formOpen, setFormOpen] = useState(false);

  const formHandler = () => {
    setFormOpen(false);
  };
  ///// UI ELements ////////////////////

  return (
    <div className={`${styles.cta} ${styles.cta_m}`}>
      <a
        className={styles.cta__button__wrapper}
        onClick={() => {
          setFormOpen(true);
        }}
      >
        <span className={styles.cta__button__shadow}></span>
        <span className={styles.cta__button}>Join Waitlist</span>
      </a>
      <PortalModal open={formOpen} onClose={formHandler}>
        <MailchimpFormContainer
          type={isTabletOrMobile ? 'Mobile' : 'Desktop'}
        />
      </PortalModal>
    </div>
  );
}

export default CtaButton;
