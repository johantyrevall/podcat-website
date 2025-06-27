import './App.css'
import Header from './components/header/header'
import LandingPage from './components/landingpage/landingpage'
import Services from './components/services/services'
import Price from './components/price/price'
import Sample from './components/sample/sample'
import Faq from './components/faq/faq'
import Contact from './components/contact/contact'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <LandingPage />
      <Services />
      <Price />
      <Sample />
      <Faq />
      <Contact />
    </>
  )
}

export default App
