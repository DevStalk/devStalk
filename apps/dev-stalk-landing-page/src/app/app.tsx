import Footer from './components/footer/footer';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Home from './pages/home/home';
import About from './pages/about/about';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
