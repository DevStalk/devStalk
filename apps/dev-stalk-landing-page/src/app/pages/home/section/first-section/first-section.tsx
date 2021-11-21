import styles from './first-section.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, CSSRulePlugin } from 'gsap/src/all';
import CtaButton from '../../../../components/cta-button/cta-button';
import { ReactComponent as Art } from '../../../../../assets/logo/art.svg';
import { ReactComponent as WordMark } from '../../../../../assets/logo/Wordmark-White.svg';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  const rule = CSSRulePlugin.getRule(
    '.' + styles.firstSection__separator__sep + ':before'
  );

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + styles.firstSection,
        start: 'top top',
        end: 'bottom top',
        pin: '.' + styles.firstSection,
        scrub: 0.5,
      },
    });

    timeline.to('.' + styles.firstSection__art, { opacity: 1, duration: 1.8 });
  });
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__content}>
        <div className={styles.firstSection__content__wrapper}>
          <h1>
            Tired of missing opportunities, don't know how to network and are
            still stuck with creating your developer profile?
          </h1>
          <h2>Let people discover you instead!</h2>
          <h3>
            Create your developer identity, signup now and get early access.
          </h3>
          <CtaButton isMobile={true} />
        </div>
      </div>
      <div className={styles.firstSection__art}>
        <Art />
      </div>
    </div>
  );
}

export default FirstSection;
