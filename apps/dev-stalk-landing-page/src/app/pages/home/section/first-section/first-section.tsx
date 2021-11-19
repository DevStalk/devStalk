import styles from './first-section.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import CtaButton from '../../../../components/cta-button/cta-button';
import { ReactComponent as Art } from '../../../../../assets/logo/art.svg';
import { ReactComponent as WordMark } from '../../../../../assets/logo/Wordmark-White.svg';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + styles.firstSection,
        start: 'top top',
        end: 'bottom top',
        pin: '.' + styles.firstSection,
        // scrub: 0.5,
      },
    });

    timeline
      .to('.' + styles.firstSection__left, { opacity: 1, duration: 0.8 })
      .to(
        '.' + styles.firstSection__separator__sep,
        {
          width: '60vw',
          duration: 0.8,
          ease: 'power4.inOut',
        },
        0
      )
      .to('.' + styles.firstSection__right, {
        display: 'flex',
        duration: 0,
      })
      .to(
        '.' + styles.firstSection__separator__sep,
        {
          width: '1px',
          duration: 0.8,
          ease: 'power4.inOut',
        }
        // 1.7
      );
  });
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__left}>
        <Art className={styles.firstSection__art} />
        <WordMark className={styles.firstSection__wordmark} />
      </div>
      <div className={styles.firstSection__separator}>
        <div className={styles.firstSection__separator__sep}> </div>
      </div>
      <div className={styles.firstSection__right}>
        <div className={styles.firstSection__right__wrapper}>
          <h1>
            Tired of missing opportunities, don't know how to network and are
            still stuck with creating your developer profile?
          </h1>
          <h2>Let people discover you instead!</h2>
          <h3>
            Create your developer identity, Signup now and get early access.
          </h3>
          <CtaButton isMobile={true} />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
