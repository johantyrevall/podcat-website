import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header/temp name header'
import LandingPage from './components/landing-page/LandingPage'
import Services from './components/services/temp name services'
import Price from './components/price/temp name price'
import Sample from './components/sample/temp name sample'
import Faq from './components/faq/temp name faq'
import Contact from './components/contact/temp name contact'
import Footer from './components/footer/temp name footer'
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import TermsOfService from './components/terms-of-service/TermsOfService';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);
  return (
    <>
      <LandingPage />
      <Services />
      <Price />
      <Sample />
      <Faq />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
