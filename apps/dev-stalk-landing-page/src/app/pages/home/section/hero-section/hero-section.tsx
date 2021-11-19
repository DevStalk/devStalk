/* eslint-disable jsx-a11y/anchor-is-valid */
// ----------------------Third Party Imports------------------------------------- //
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// ----------------------Third Party Imports------------------------------------- //

// ----------------------Image Imports------------------------------------- //
import { ReactComponent as ScrollArrow } from '../../../../../assets/components/scrollArrow.svg';
import android from '../../../../../assets/components/3d/Android_perspective_matte.webp';
import code from '../../../../../assets/components/3d/Code_perspective_matte.webp';
import comment from '../../../../../assets/components/3d/Comment_perspective_matte.webp';
import ethereum from '../../../../../assets/components/3d/Ethereum_perspective_matte.webp';
import rocket from '../../../../../assets/components/3d/Rocket_perspective_matte.webp';
// ----------------------Image Imports------------------------------------- //

// ----------------------Style Sheet Imports------------------------------------- //
import styles from './hero-section.module.scss';
// ----------------------Style Sheet Imports------------------------------------- //
import LoadingScreen from '../../../../components/loading-screen/loading-screen';
import CtaButton from '../../../../components/cta-button/cta-button';

/* eslint-disable-next-line */
export interface HeroSectionProps {}

///////////////////////////////////////////////////////////////////
// Main Section
///////////////////////////////////////////////////////////////////

export function HeroSection(props: HeroSectionProps) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + styles.hero__wrapper,
        pin: '.' + styles.hero,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        // markers: true,
      },
    });

    timeline
      .to('.' + styles.hero, { opacity: 0, duration: 0.5 })
      .to('.' + styles.htn, { x: '80%', y: '-80%', ease: 'power1.out' }, '0')
      .to('.' + styles.htn, { x: '160%', y: '-160%', ease: 'power1.out' })
      .to('.' + styles.htn, { x: '240%', y: '-240%', ease: 'power1.out' })
      .to('.' + styles.htn, { x: '320%', y: '-320%', ease: 'power1.out' })
      .to('.' + styles.htn, { opacity: 0 }, '-=.5');
  });
  return (
    <div className={styles.hero__wrapper}>
      <LoadingScreen />
      <HeroMain />
      <HeroToNext />
    </div>
  );
}

///////////////////////////////////////////////////////////////////
// Hero Main Section
///////////////////////////////////////////////////////////////////

const HeroMain = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__main}>
        <HeroMainSVGs />
        <h2 className={styles.hero__heading}>
          Create Your <br /> Developer <br /> Identity
        </h2>
      </div>
      <h4 className={styles.hero__subHeading}>
        A new professional community for your independent journey.
      </h4>
      <CtaButton isMobile={false} />
      <div className={`${styles.hero__tut} slideUp`}>
        <ScrollArrow className={styles.hero__tut__arrow} />
        <span>Scroll</span>
      </div>
    </div>
  );
};

///////////////////////////////////////////////////////////////////////////////
// Extra Items
const HeroMainSVGs = () => {
  return (
    <>
      <div
        className={` ${styles.hero__main_wrapper} ${styles.hero__main_wrapper1} `}
      >
        <img className={styles.hero__main_child} src={android} alt="android" />
      </div>
      <div
        className={` ${styles.hero__main_wrapper} ${styles.hero__main_wrapper2} `}
      >
        <img className={styles.hero__main_child} src={code} alt="code" />
      </div>
      <div
        className={` ${styles.hero__main_wrapper} ${styles.hero__main_wrapper3} `}
      >
        <img className={styles.hero__main_child} src={comment} alt="comment" />
      </div>
      <div
        className={` ${styles.hero__main_wrapper} ${styles.hero__main_wrapper4} `}
      >
        <img
          className={styles.hero__main_child}
          src={ethereum}
          alt="ethereum"
        />
      </div>
      <div
        className={` ${styles.hero__main_wrapper} ${styles.hero__main_wrapper5} `}
      >
        <img className={styles.hero__main_child} src={rocket} alt="rocket" />
      </div>
    </>
  );
};

export function HeroToNext() {
  return (
    <div className={`${styles.htn} `}>
      <div className={`${styles.htn__child} ${styles.htn__child1} `}>
        <h2>Explore</h2>
      </div>
      <div className={`${styles.htn__child} ${styles.htn__child2} `}>
        <h2>Create</h2>
      </div>
      <div className={`${styles.htn__child} ${styles.htn__child3} `}>
        <h2>Inspire</h2>
      </div>
    </div>
  );
}

export default HeroSection;
