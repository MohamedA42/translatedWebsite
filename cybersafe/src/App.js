import React, { useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Pages/Navbar';
import Footer from './components/Pages/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

// Lazy load the page components
const Home = lazy(() => import('./components/Pages/Home'));
const AboutUs = lazy(() => import('./components/Pages/AboutUs'));
const Services = lazy(() => import('./components/Pages/Services'));
const ContactUs = lazy(() => import('./components/Pages/ContactUs'));
const SignUp = lazy(() => import('./components/Pages/SignUp'));

// Error Boundary component for better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in error boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: 'center', color: 'red' }}>Oops! Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

const App = () => {
  const { i18n } = useTranslation();

  // Check the cookie for a saved language when the component mounts
  useEffect(() => {
    const savedLanguage = Cookies.get('i18next') || 'en'; // Default to 'en' if no cookie exists
    i18n.changeLanguage(savedLanguage); // Change to saved language
  }, [i18n]);

  // Adjust the document direction and language dynamically
  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'; // Set direction based on language
    document.documentElement.lang = i18n.language; // Set the lang attribute
  }, [i18n.language]);

  return (
    <Router>
      <Navbar /> {/* Navigation bar component */}

      <div className="App" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Ensure LanguageSwitcher is rendered globally */}
        <LanguageSwitcher />

        <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading, please wait...</div>}>
          {/* Lazy loading fallback */}
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect from root to home */}
              <Route path="/home" element={<Home />} /> {/* Home route */}
              <Route path="/about-us" element={<AboutUs />} /> {/* About Us page */}
              <Route path="/services" element={<Services />} /> {/* Services page */}
              <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us page */}
              <Route path="/signup" element={<SignUp />} /> {/* Sign Up page */}
            </Routes>
          </ErrorBoundary>
        </Suspense>

      </div>

      <Footer /> {/* Footer component */}
    </Router>
  );
}

export default App;
