import styles from './home.module.scss';
import { motion } from 'framer-motion';
import HeroSection from './section/hero-section/hero-section';

/* eslint-disable-next-line */
export interface HomeProps {}

const stagger = {
  animate: (i: number) => ({
    transition: {
      when: 'afterChildren',
      staggerChildren: i,
    },
  }),
};

export function Home(props: HomeProps) {
  return (
    <motion.div
      className={styles.home}
      custom={40}
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      <HeroSection />
    </motion.div>
  );
}

export default Home;
