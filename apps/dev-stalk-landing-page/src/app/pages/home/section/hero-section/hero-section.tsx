/* eslint-disable jsx-a11y/anchor-is-valid */
// ----------------------Third Party Imports------------------------------------- //
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// ----------------------Third Party Imports------------------------------------- //

// ----------------------Libraries------------------------------------- //
// import { AnimatedLetter } from '@dev-stalk/ui-effects';
import { TextSplitting } from '@dev-stalk/utils';
// ----------------------Libraries------------------------------------- //

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

/* eslint-disable-next-line */
export interface HeroSectionProps {}

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

  const htnTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.' + styles.hero__wrapper,
      start: 'top top',
      end: 'bottom center',
      scrub: 0.5,
    },
  });

  htnTL
    .to('.' + styles.htn, { x: '80%', y: '-80%', ease: 'power1.out' })
    .to('.' + styles.htn, { x: '160%', y: '-160%', ease: 'power1.out' })
    .to('.' + styles.htn, { x: '240%', y: '-240%', ease: 'power1.out' })
    .to('.' + styles.htn, { x: '320%', y: '-320%', ease: 'power1.out' })
    .to('.' + styles.htn, { opacity: 0 }, '-=.5');

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
  const elementsAnimation = gsap.fromTo(
    '.' + styles.hero__main_wrapper,
    { scale: 3, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      stagger: { each: 0.1 },
      ease: 'power1.out',
    }
  );
  const loadingAnimation = gsap.to('.' + styles.hero__loading, {
    height: 0,
    ease: 'Expo.easeOut',
    duration: 2,
  });
  const textAnimation = gsap.fromTo(
    '.' + styles.hero__heading,
    {
      color: 'white',
    },
    { color: '#1b1b1b' }
  );
  const indexationAnimation = gsap.to('.' + styles.htn, {
    opacity: 1,
  });
  timeline
    .add(letterAnimation)
    .add(loadingAnimation, '+=.3')
    .add(textAnimation, '-=1.9')
    .add(elementsAnimation, '-=1')
    .add(indexationAnimation, '-=.5');

  return (
    <div className={styles.hero__wrapper}>
      <HeroMain />
      <HeroToNext />
    </div>
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
  const [input, setInput] = useState('');
  return (
    <div className={styles.hero}>
      <div className={styles.hero__main}>
        <HeroMainSVGs />
        <div className={styles.hero__loading}></div>
        <h2 className={styles.hero__heading}>
          {TextSplitting(
            'Create Your',
            'letter',
            styles.hero__letterAnimation,
            styles.hero__heading_container
          )}
          {TextSplitting(
            'Developer',
            'letter',
            styles.hero__letterAnimation,
            styles.hero__heading_container
          )}
          {TextSplitting(
            'Identity',
            'letter',
            styles.hero__letterAnimation,
            styles.hero__heading_container
          )}
        </h2>
      </div>
      <h4 className={styles.hero__subHeading}>
        A new professional community for your independent journey.
        {/* {TextSplitting(
          'A new professional community for your independent journey',
          'letter',
          styles.hero__letterAnimation,
          styles.hero__subHeading_container
        )} */}
      </h4>
      <div className={`${styles.hero__cta} `}>
        <input
          className={`${styles.hero__cta__input} ${
            clicked ? styles.hero__cta__input__clicked : ''
          } `}
          placeholder="iwant@developeridentity.com"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <a
          onClick={(e) => {
            if (clicked) {
              if (input === '') {
                setClicked(false);
              } else {
                console.log('done');
              }
            } else {
              setClicked(true);
            }
          }}
          className={styles.hero__cta__button}
        >
          Join Waitlist
        </a>
      </div>
      <div className={`${styles.hero__tut} slideUp`}>
        <ScrollArrow className={styles.hero__tut__arrow} />
        <span>Scroll</span>
      </div>
    </div>
  );
};

///////////////////////////////////////////////////////////////////
// End of Hero Main
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Extra Items
const HeroMainSVGs = () => {
  return (
    <>
      {/* <div className={styles.hero__main}> */}
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
      {/* </div> */}
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
