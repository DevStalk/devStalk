import styles from './first-section.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextSplitting } from '@dev-stalk/utils';
import { ScrollTrigger } from 'gsap/src/all';
import CtaButton from '../../../../components/cta-button/cta-button';
import { ReactComponent as Logo } from '../../../../../assets/logo/Icon-Color.svg';
import { ReactComponent as WordMark } from '../../../../../assets/logo/Wordmark-White.svg';
import { useMediaQuery } from 'react-responsive';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  let isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__left}>
        <WordMark />
      </div>
      <div className={styles.firstSection__separator}>
        <div> </div>
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
