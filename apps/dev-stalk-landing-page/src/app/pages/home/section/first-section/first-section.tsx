import styles from './first-section.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextSplitting } from '@dev-stalk/utils';
import { ScrollTrigger } from 'gsap/src/all';
import CtaButton from '../../../../components/cta-button/cta-button';
import { ReactComponent as Logo } from '../../../../../assets/logo/Icon-Color.svg';
import { ReactComponent as WordMark } from '../../../../../assets/logo/Wordmark-White.svg';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__left}>
        {/* <Logo /> */}
        <WordMark />
      </div>
      <div className={styles.firstSection__separator}>
        <div> </div>
      </div>
      <div className={styles.firstSection__right}>
        <h1>
          Tired of missing opportunities, don't know how to network and are
          still stuck with creating your Developer profile.
        </h1>
        <h2>Let people Discover you instead!</h2>
        <h3>Join devStalk, Create your Developer Identity.</h3>
        <CtaButton />
      </div>
    </div>
  );
}

export default FirstSection;
