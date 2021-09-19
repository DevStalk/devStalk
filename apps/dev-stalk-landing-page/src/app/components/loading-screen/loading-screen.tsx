import styles from './loading-screen.module.scss';

import React, { useEffect, Dispatch, SetStateAction } from 'react';
import gsap from 'gsap';
import { TextSplitting } from '@dev-stalk/utils';

/* eslint-disable-next-line */
export interface LoadingScreenProps {}

export function LoadingScreen(props: LoadingScreenProps) {
  useEffect(() => {
    const loadingAnimation = gsap
      .timeline({ repeat: 1 })
      .to('.' + styles.loading__loader, {
        left: '100%',
        duration: 1.2,
      });
    const timeline = gsap.timeline();
    const letterAnimation = gsap.fromTo(
      '.' + styles.hero__letterAnimation,
      { y: -200 },
      {
        y: 0,
        stagger: { each: 0.02 },
        ease: 'power1.out',
      }
    );
    const loadingExitAnimation = gsap.to('.' + styles.loading__screen, {
      height: 0,
      ease: 'Expo.easeOut',
      duration: 2,
    });
    timeline
      .add(loadingAnimation)
      .add(letterAnimation)
      .add(loadingExitAnimation, '+=.5');
  });

  return (
    <div className={styles.loading__screen}>
      <div className={styles.loading__wrapper}>
        <div className={styles.loading__loader__wrapper}>
          <div className={styles.loading__loader}></div>
        </div>
      </div>
      <div className={styles.loading__heading__wrapper}>
        <h2 className={styles.loading__heading}>
          {TextSplitting(
            'Create Your',
            'letter',
            styles.loading__heading__letter,
            styles.loading__heading__container
          )}
          {TextSplitting(
            'Developer',
            'letter',
            styles.loading__heading__letter,
            styles.loading__heading__container
          )}
          {TextSplitting(
            'Identity',
            'letter',
            styles.loading__heading__letter,
            styles.loading__heading__container
          )}
        </h2>
      </div>
    </div>
  );
}

export default LoadingScreen;
