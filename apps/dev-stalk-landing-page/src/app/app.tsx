import Footer from './components/footer/footer';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Home from './pages/home/home';
import About from './pages/about/about';
import CustomCursor from './components/custom-cursor/custom-cursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect, useState } from 'react';

import styles from './app.module.scss';

export function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [height, setHeight] = useState(0);
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setHeight(containerRef?.current?.clientHeight);
  }, [containerRef]);

  // useEffect(() => {
  //   gsap.to('#scrollContainer', {
  //     y: () => -(height - document.documentElement.clientHeight),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: document.body,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1,
  //       invalidateOnRefresh: true,
  //       markers: false,
  //     },
  //   });
  // });

  return (
    <div ref={containerRef} id="app" className={styles.app}>
      <CustomCursor />
      <NavigationBar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
