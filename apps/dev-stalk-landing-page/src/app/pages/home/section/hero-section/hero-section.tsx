/* eslint-disable jsx-a11y/anchor-is-valid */
// Third Party Imports
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// libraries
import { AnimatedLetter } from '@dev-stalk/ui-effects';
import useWindowSize from '../../../../hooks/useWindowSize';

// SVGs
import { ReactComponent as ScrollArrow } from '../../../../../assets/components/scrollArrow.svg';
import android from '../../../../../assets/components/3d/android-free/Android_perspective_matte.png';
import code from '../../../../../assets/components/3d/code-free/Code_perspective_matte.png';
import comment from '../../../../../assets/components/3d/comment-free/Comment_perspective_matte.png';
import ethereum from '../../../../../assets/components/3d/ethereum-free/Ethereum_perspective_matte.png';
import rocket from '../../../../../assets/components/3d/rocket-free/Rocket_perspective_matte.png';

import styles from './hero-section.module.scss';

/* eslint-disable-next-line */
export interface HeroSectionProps {}

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

const ctaAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};

const ctaBehaviour = {
  initial: { width: '0rem', display: 'none' },
  animate: {
    width: '40rem',
    display: 'block',
    transition: { type: 'spring', stiffness: '100' },
  },
};

const scrollSkipAnimation = {
  initial: { opacity: 0, scale: 1.4, y: 100 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};
const HeroToNextAnimations = {
  startStage: { opacity: 0 },
  loadingEndStage: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 1 },
  },
  moveEndStage: {
    backgroundColor: 'black',
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};

export function HeroSection(props: HeroSectionProps) {
  return (
    <motion.div
      className={styles.hero__wrapper}
      custom={0.4}
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      <HeroToNext />
      <HeroMain />
    </motion.div>
  );
}

const HeroMainElements = () => {
  return (
    <motion.div className={styles.hero__mainEl} custom={0.2} variants={stagger}>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper1} `}
        variants={noEffectStagger}
      >
        <img
          className={styles.hero__mainEl_child}
          src={android}
          alt="android"
        />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper2} `}
        variants={noEffectStagger}
      >
        <img className={styles.hero__mainEl_child} src={code} alt="code" />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper3} `}
        variants={noEffectStagger}
      >
        <img
          className={styles.hero__mainEl_child}
          src={comment}
          alt="comment"
        />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper4} `}
        variants={noEffectStagger}
      >
        <img
          className={styles.hero__mainEl_child}
          src={ethereum}
          alt="ethereum"
        />
      </motion.div>
      <motion.div
        className={` ${styles.hero__mainEl_wrapper} ${styles.hero__mainEl_wrapper5} `}
        variants={noEffectStagger}
      >
        <img className={styles.hero__mainEl_child} src={rocket} alt="rocket" />
      </motion.div>
    </motion.div>
  );
};

const HeroMain = () => {
  const [startHereState, setStartHereState] = useState(false);
  return (
    <motion.div
      className={`${styles.hero} sticky`}
      custom={0.2}
      variants={stagger}
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
      <HeroMainElements />
      <motion.div className={styles.hero__cta} variants={ctaAnimation}>
        <motion.input
          className={styles.hero__cta__input}
          placeholder="iwant@developeridentity.com"
          variants={ctaBehaviour}
          animate={startHereState ? 'animate' : 'initial'}
        ></motion.input>
        <a
          onClick={() => {
            console.log('hello');
            setStartHereState(true);
          }}
          className={styles.hero__cta__button}
        >
          Join Waitlist
        </a>
      </motion.div>
      <motion.div className={styles.hero__tut} variants={scrollSkipAnimation}>
        <ScrollArrow className={styles.hero__tut__arrow} />
        <span>Scroll</span>
      </motion.div>
    </motion.div>
  );
};

export function HeroToNext() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [pointer, setPointer] = React.useState(false);
  const [black, setBlack] = React.useState(false);
  const size = useWindowSize();

  useEffect(() => {
    const handleScroll = (e: any) => {
      const vh = size.height;
      const vw = size.width;
      const scroll = window.scrollY;
      console.log(scroll);
      let xTemp = (-scroll * 100) / vh;
      let yTemp = ((scroll * 100) / vh) * (10 / 9);

      if ((xTemp >= -76 && xTemp <= -66) || (yTemp >= 75 && yTemp <= 85)) {
        xTemp = -72;
        yTemp = 80;
      } else if (
        (xTemp >= -150 && xTemp <= -140) ||
        (yTemp >= 155 && yTemp <= 165)
      ) {
        xTemp = -144;
        yTemp = 160;
      } else if (
        (xTemp >= -225 && xTemp <= -215) ||
        (yTemp >= 235 && yTemp <= 245)
      ) {
        xTemp = -216;
        yTemp = 240;
      }

      // console.log(yTemp);
      if (yTemp >= 80) {
        setBlack(true);
        if (yTemp <= 300) {
          setPointer(true);
        } else {
          setPointer(false);
        }
      } else {
        setBlack(false);
        setPointer(false);
      }

      xTemp = xTemp * (vh / 100);
      yTemp = yTemp * (vw / 100);
      x.set(xTemp);
      y.set(yTemp);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [size.height, size.width]);

  return (
    <motion.div
      className={`${styles.htn} ${pointer ? styles.pointer : ''}`}
      variants={HeroToNextAnimations}
      initial="startStage"
      animate={black ? 'moveEndStage' : 'loadingEndStage'}
    >
      <motion.div
        className={`${styles.htn__child} ${styles.htn__child1} `}
        style={{
          translateX: y,
          translateY: x,
        }}
      >
        <h2>Explore</h2>
      </motion.div>
      <motion.div
        className={`${styles.htn__child} ${styles.htn__child2} `}
        style={{
          translateX: y,
          translateY: x,
        }}
      >
        <h2>Create</h2>
      </motion.div>
      <motion.div
        className={`${styles.htn__child} ${styles.htn__child3} `}
        style={{
          translateX: y,
          translateY: x,
        }}
      >
        <h2>Inspire</h2>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
