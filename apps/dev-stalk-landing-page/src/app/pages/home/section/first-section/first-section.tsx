import styles from './first-section.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import CtaButton from '../../../../components/cta-button/cta-button';
import { ReactComponent as WordMark } from '../../../../../assets/logo/art.svg';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + styles.firstSection,
        start: 'top top',
        end: 'bottom+=900 top',
        pin: '.' + styles.firstSection,
        markers: true,
        scrub: 0.5,
      },
    });

    timeline
      .to('.' + styles.firstSection__left, { opacity: 1, duration: 0.6 })
      .to('.' + styles.firstSection__separator__sep, {
        width: '60vw',
        duration: 0.9,
      })
      .to('.' + styles.firstSection__right, {
        display: 'flex',
        duration: 0,
      })
      .to(
        '.' + styles.firstSection__separator__sep,
        {
          width: '1px',
          duration: 0.9,
        },
        1.7
      );
  });
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__left}>
        <WordMark />
      </div>
      <div className={styles.firstSection__separator}>
        <div className={styles.firstSection__separator__sep}> </div>
      </div>
      <div className={styles.firstSection__right}>
        <div className={styles.firstSection__right__wrapper}>
          <h1>
            Tired of missing opportunities, don't know how to network and are
            still stuck with creating your Developer profile.
          </h1>
          <h2>Let people Discover you instead!</h2>
          <h3>
            Create your Developer Identity. Sign Up Now and Get early access
          </h3>
          <CtaButton isMobile={true} />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
