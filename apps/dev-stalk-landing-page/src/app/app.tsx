import Footer from './components/footer/footer';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Home from './pages/home/home';
import About from './pages/about/about';
import CustomCursor from './components/custom-cursor/custom-cursor';
import { useMediaQuery } from 'react-responsive';

import styles from './app.module.scss';

export function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  return (
    <div id="app" className={styles.app}>
      {isTabletOrMobile ? null : <CustomCursor />}
      <NavigationBar />
      <Home />
      <About />
      <Footer />
    </div>
  );
  // }
}

export default App;
