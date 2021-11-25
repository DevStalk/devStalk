import styles from './navigation-bar.module.scss';

import DevStalkLogo from '../../../assets/logo/Icon-White.png';
import DevStalkLogoBlack from '../../../assets/logo/Icon-Black.png';
import DevStalkWordMark from '../../../assets/logo/Wordmark-White.png';
import DevStalkWordMarkBlack from '../../../assets/logo/Wordmark-Black.png';

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

      if (currentScrollPos >= window.innerHeight / 2.5) setOnTop(false);
      else setOnTop(true);
    };

    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
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
        <a href="/" className={styles.navigation__logo}>
          <img src={onTop ? DevStalkLogo : DevStalkLogoBlack} alt="devStalk" />
          <img
            src={onTop ? DevStalkWordMark : DevStalkWordMarkBlack}
            alt="devStalk"
          ></img>
        </a>
      </div>
    </motion.div>
  );
}

export default NavigationBar;
