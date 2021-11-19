import styles from './navigation-bar.module.scss';
// import { ReactComponent as DevStalkLogo } from '../../../assets/logo/Lockup-Color.svg';
// import { ReactComponent as DevStalkLogoInverted } from '../../../assets/logo/Lockup-Inverted-Color.svg';

import DevStalkLogo from '../../../assets/logo/Lockup-Color.png';
import DevStalkLogoInverted from '../../../assets/logo/Lockup-Inverted-Color.png';
import { motion } from 'framer-motion';
import React from 'react';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

const variants = {
  hidden: { opacity: 0, y: -180 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 0.6 },
  },
};

export function NavigationBar(props: NavigationBarProps) {
  const [visible, setVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset);
  const [onTop, setOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const prev = prevScrollPos;
      const currentScrollPos = window.pageYOffset;

      setVisible(prev > currentScrollPos);
      setPrevScrollPos(window.pageYOffset);

      if (currentScrollPos >= window.innerHeight / 2) setOnTop(false);
      else setOnTop(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.div
      className={styles.navigation__wrapper}
      variants={variants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
    >
      <div className={styles.navigation}>
        <div className={styles.navigation__menu}>
          <a href="/about" className={`${onTop ? '' : styles.bg}`}>
            {/* about */}
          </a>
        </div>
        <a href="/" className={styles.navigation__logo}>
          <img
            src={onTop ? DevStalkLogo : DevStalkLogoInverted}
            alt="devStalk"
          />
          {/* {onTop ? <DevStalkLogo /> : <DevStalkLogoInverted />} */}
        </a>
        <div className={styles.navigation__cta}>
          <a href="/register" className={`${onTop ? '' : styles.bg}`}>
            {/* Join Waitlist */}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default NavigationBar;
