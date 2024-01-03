import './App.css';
import Header from "./components/Header";
import HeroPage from './components/HeroPage';
import Loading from './components/UI/loading/Loading';
import CTA from './components/cta/CTA';
import AboutMe from './components/pages/aboutMe/AboutMe';
import Footer from './components/pages/footer/Footer';
import Portfolio from './components/pages/portfolio/Portfolio';
import { useState, useEffect } from 'react';
import Services from './components/pages/services/Services';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  if (isLoading) {
    return <Loading />; 
  }

  return (
    <>
    <Header />
    <HeroPage />
    <AboutMe />
    <Portfolio />
    <Services />
    <CTA />
    <Footer />
    </>
  );
}

export default App;
