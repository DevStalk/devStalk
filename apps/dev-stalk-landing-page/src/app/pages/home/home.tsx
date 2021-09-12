import styles from './home.module.scss';
import { motion } from 'framer-motion';
import HeroSection from './section/hero-section/hero-section';
import FirstSection from './section/first-section/first-section';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div id="scrollContainer" className={styles.home}>
      <HeroSection />
      <FirstSection />
    </div>
  );
}

export default Home;
