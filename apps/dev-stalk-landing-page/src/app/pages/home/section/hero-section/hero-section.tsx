/* eslint-disable jsx-a11y/anchor-is-valid */
// ----------------------Third Party Imports------------------------------------- //
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// ----------------------Third Party Imports------------------------------------- //

// ----------------------Libraries------------------------------------- //
import { AnimatedLetter } from '@dev-stalk/ui-effects';
import useWindowSize from '../../../../hooks/useWindowSize';
// ----------------------Libraries------------------------------------- //

// ----------------------Image Imports------------------------------------- //
import { ReactComponent as ScrollArrow } from '../../../../../assets/components/scrollArrow.svg';
import android from '../../../../../assets/components/3d/android-free/Android_perspective_matte.png';
import code from '../../../../../assets/components/3d/code-free/Code_perspective_matte.png';
import comment from '../../../../../assets/components/3d/comment-free/Comment_perspective_matte.png';
import ethereum from '../../../../../assets/components/3d/ethereum-free/Ethereum_perspective_matte.png';
import rocket from '../../../../../assets/components/3d/rocket-free/Rocket_perspective_matte.png';
// ----------------------Image Imports------------------------------------- //

// ----------------------Style Sheet Imports------------------------------------- //
import styles from './hero-section.module.scss';
// ----------------------Style Sheet Imports------------------------------------- //

/* eslint-disable-next-line */
export interface HeroSectionProps {}

// ----------------------Global Animations------------------------------------- //
const stagger = {
  initial: { opacity: 0 },
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: i,
    },
  }),
};

const noEffectStagger = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { ease: 'easeInOut', duration: 1 } },
};

const dropFromTop = {
  initial: { scale: 3, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
};

const slideUpAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};
// ----------------------Global Animations------------------------------------- //

///////////////////////////////////////////////////////////////////
// Main Section
///////////////////////////////////////////////////////////////////

export function HeroSection(props: HeroSectionProps) {
  gsap.registerPlugin(ScrollTrigger);

  const opacityTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.' + styles.hero,
      start: 'top top',
      end: '+=600px top',
      pin: true,
      pinSpacing: false,
      scrub: 0.2,
      // markers: true,
    },
  });

  opacityTL.fromTo(
    '.' + styles.hero,
    { opacity: 1 },
    { opacity: 0, duration: 10 }
  );

  return (
    <motion.div
      className={styles.hero__wrapper}
      custom={0.4}
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      <HeroMain />
      <HeroToNext />
    </motion.div>
  );
}
///////////////////////////////////////////////////////////////////
// End of Main Section
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// Hero Main Section
///////////////////////////////////////////////////////////////////

// ----------------------Logic------------------------------------- //
const HeroMain = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <motion.div
      className={`${styles.hero}`}
      custom={1}
      variants={heroMainBehaviour}
      initial="initial"
      animate="animate"
    >
      <motion.h2 className={styles.hero__heading} variants={noEffectStagger}>
        {AnimatedLetter('Create Your', '0.015')}
        {AnimatedLetter('Developer', '0.015')}
        {AnimatedLetter('Identity', '0.015')}
      </motion.h2>
      <motion.h4 className={styles.hero__subHeading} variants={noEffectStagger}>
        {AnimatedLetter(
          'A new professional community for your independent journey',
          '0.005'
        )}
      </motion.h4>
      <HeroMainSVGs />
      <motion.div className={styles.hero__cta} variants={slideUpAnimation}>
        <motion.input
          className={styles.hero__cta__input}
          placeholder="iwant@developeridentity.com"
          variants={ctaBehaviour}
          animate={clicked ? 'animate' : 'initial'}
        ></motion.input>
        <a
          onClick={() => {
            if (clicked) {
              console.log('popup');
            } else {
              setClicked(true);
            }
          }}
          className={styles.hero__cta__button}
        >
          Join Waitlist
        </a>
      </motion.div>
      <motion.div className={styles.hero__tut} variants={slideUpAnimation}>
        <ScrollArrow className={styles.hero__tut__arrow} />
        <span>Scroll</span>
      </motion.div>
    </motion.div>
  );
};
// ---------------------------------------------------------------------- //

// ----------------------Animations------------------------------------- //
const ctaBehaviour = {
  initial: { width: '0rem', display: 'none' },
  animate: {
    width: '40rem',
    display: 'block',
    transition: { type: 'spring', stiffness: '100' },
  },
};

const heroMainBehaviour = {
  initial: { opacity: 0 },
  animate: (i: number) => ({
    opacity: i,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  }),
};
// --------------------------------------------------------------------- //

///////////////////////////////////////////////////////////////////
// End of Hero Main
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Extra Items
const HeroMainSVGs = () => {
  return (
    <>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper1} `}
        variants={dropFromTop}
      >
        <img
          className={styles.hero__mainEl_child}
          src={android}
          alt="android"
        />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper2} `}
        variants={dropFromTop}
      >
        <img className={styles.hero__mainEl_child} src={code} alt="code" />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper3} `}
        variants={dropFromTop}
      >
        <img
          className={styles.hero__mainEl_child}
          src={comment}
          alt="comment"
        />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper4} `}
        variants={dropFromTop}
      >
        <img
          className={styles.hero__mainEl_child}
          src={ethereum}
          alt="ethereum"
        />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper5} `}
        variants={dropFromTop}
      >
        <img className={styles.hero__mainEl_child} src={rocket} alt="rocket" />
      </motion.div>
    </>
  );
};

export function HeroToNext() {
  const htnTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.' + styles.hero__wrapper,
      start: 'top top',
      end: 'bottom center',
      scrub: 0.5,
      // markers: true,
    },
  });

  htnTL
    .to('.' + styles.htn, { x: '80%', y: '-80%', ease: 'power1.out' })
    .to('.' + styles.htn, { x: '160%', y: '-160%', ease: 'power1.out' })
    .to('.' + styles.htn, { x: '240%', y: '-240%', ease: 'power1.out' })
    .to('.' + styles.htn, { x: '320%', y: '-320%', ease: 'power1.out' })
    .to('.' + styles.htn, { opacity: 0 }, '-=.5');

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
