import styles from './home.module.scss';
import { lazy, Suspense } from 'react';
// import HeroSection from './section/hero-section/hero-section';
// import FirstSection from './section/first-section/first-section';

const HeroSection = lazy(() => import('./section/hero-section/hero-section'));
const FirstSection = lazy(
  () => import('./section/first-section/first-section')
);

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles.home}>
      <Suspense fallback={<div></div>}>
        <HeroSection />
        <FirstSection />
      </Suspense>
    </div>
  );
}

export default Home;
