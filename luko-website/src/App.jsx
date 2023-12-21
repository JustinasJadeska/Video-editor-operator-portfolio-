import './App.css';
import Header from "./components/Header";
import HeroPage from './components/HeroPage';
import Loading from './components/UI/loading/Loading';
import CTA from './components/cta/CTA';
import AboutMe from './components/pages/aboutMe/AboutMe';
import Footer from './components/pages/footer/Footer';
import Portfolio from './components/pages/portfolio/Portfolio';
import { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process or wait for all components to mount
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  if (isLoading) {
    return <Loading />; // Render Loading component while loading
  }

  return (
    <>
    <Header />
    <HeroPage />
    <AboutMe />
    <Portfolio />
    <CTA />
    <Footer />
    </>
  );
}

export default App;
