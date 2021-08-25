import styles from './animated-letter.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

// import Splitting from 'splitting';
import Splitting from 'splitting';

/* eslint-disable-next-line */
export interface AnimatedLetterProps {}

const stagger = {
  animate: (i: number) => ({
    transition: {
      delayChildren: 0.6,
      staggerChildren: i,
    },
  }),
};

const letterAnimation = {
  initial: {
    y: -300,
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      // ease: [0.6, 0.01, -0.05, 0.95],
      // duration: 1,
    },
  },
};

export function AnimatedLetter(title: string, stg: string) {
  // let words: string[];
  // let temp: string = ' ';
  // for (let i = 0; i < title.length; i++) {
  //   if (title[i] !== ' ') {
  //     temp += title[i];
  //   } else {
  //     words.push(temp);
  //     temp = '';
  //   }
  // }
  return (
    <motion.span
      className={styles.line}
      custom={parseFloat(stg)}
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter) => {
        if (letter === ' ') {
          return (
            <motion.span className={styles.word} variants={letterAnimation}>
              &nbsp;
            </motion.span>
          );
        } else {
          return (
            <motion.span className={styles.word} variants={letterAnimation}>
              {letter}
            </motion.span>
          );
        }
      })}
    </motion.span>
  );
}

export default AnimatedLetter;
