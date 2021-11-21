import styles from './loading-screen.module.scss';

import React, { useEffect } from 'react';
import gsap from 'gsap';

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
      '.' + styles.loading__heading__wrap + ' h1',
      { y: 113, rotateZ: '3deg' },
      {
        y: 0,
        rotateZ: '0',
        stagger: { each: 0.3 },
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
      <div className={styles.loading__heading}>
        <div
          className={`${styles.loading__heading__wrap} primary-heading__wrap`}
        >
          <h1 className="primary-heading">Create your</h1>
        </div>
        <div
          className={`${styles.loading__heading__wrap} primary-heading__wrap`}
        >
          <h1 className="primary-heading">developer</h1>
        </div>
        <div
          className={`${styles.loading__heading__wrap} primary-heading__wrap`}
        >
          <h1 className="primary-heading">identity</h1>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
