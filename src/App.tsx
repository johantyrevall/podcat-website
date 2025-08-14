import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import LandingPage from './components/landing-page/LandingPage'
import Services from './components/services/Services'
import Price from './components/price/Price'
import Sample from './components/sample/Sample'
import Faq from './components/faq/Faq'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import TermsOfService from './components/terms-of-service/TermsOfService';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactCookieBot from 'react-cookiebot';

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const TopScrollLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function Home() {
  const location = useLocation();
  const [canShowContact, setCanShowContact] = useState(false);
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

  useEffect(() => {
    function checkConsent() {
      setCanShowContact(!!(window.Cookiebot?.consent?.marketing));
    }

    checkConsent();
    window.addEventListener('CookiebotOnConsentReady', checkConsent);
    window.addEventListener('CookiebotOnAccept', checkConsent);
    window.addEventListener('CookiebotOnDecline', checkConsent);

    return () => {
      window.removeEventListener('CookiebotOnConsentReady', checkConsent);
      window.removeEventListener('CookiebotOnAccept', checkConsent);
      window.removeEventListener('CookiebotOnDecline', checkConsent);
    };
  }, []);

  return (
    <>
      <LandingPage />
      <Services />
      <Price />
      <Sample />
      <Faq />
      {canShowContact ? <Contact /> : <p>Acceptera marknadsföringscookies för att se vårt kontaktformulär.</p>}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const domainGroupId = '8e864da2-a6fe-48f9-bf74-0be1668e83a2';

  return (
    <>
      <ReactCookieBot domainGroupId={domainGroupId}/>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<TopScrollLayout />}>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
