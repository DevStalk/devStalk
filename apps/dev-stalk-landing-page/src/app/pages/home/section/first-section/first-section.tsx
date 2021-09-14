import styles from './first-section.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextSplitting } from '@dev-stalk/utils';
import { ScrollTrigger } from 'gsap/src/all';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      '.letterAnimate',
      { y: 100 },
      {
        y: 0,
        stagger: { each: 0.01 },
        ease: 'back.out(1)',
        scrollTrigger: { trigger: '.containerAnimated', markers: false },
      }
    );
  });

  return (
    <div className={styles.firstSection}>
      <h4 data-splitting className={`tp1 tp1-heading-l1 ${styles.sitDown}`}>
        {/* devStalk is the place for you to start your developer journey right!! */}
        {TextSplitting(
          'devStalk is the place for you to start your developer journey right!!',
          'letter',
          'letterAnimate',
          'containerAnimated'
        )}
      </h4>
    </div>
  );
}

export default FirstSection;
