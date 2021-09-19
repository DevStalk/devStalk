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
      '.' + styles.firstSection__heading__letter,
      { y: 300 },
      {
        y: 0,
        stagger: { each: 0.01 },
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.' + styles.firstSection,
          markers: true,
        },
      }
    );
  });

  return (
    <div className={styles.firstSection}>
      <h4 className={`tp1 tp1-heading-l1 ${styles.firstSection__heading}`}>
        {TextSplitting(
          'devStalk is the place for you to start your developer journey right!!',
          'letter',
          styles.firstSection__heading__letter,
          styles.firstSection__heading__container
        )}
      </h4>
    </div>
  );
}

export default FirstSection;
