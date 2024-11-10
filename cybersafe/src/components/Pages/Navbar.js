import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './../../../src/components/Pages/Button'; // Ensure Button component exists (default export)
import './../../../src/components/Pages/Navbar.css'; // Import the CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import the globe icon
import { useTranslation } from 'react-i18next'; // Import translation hook

function Navbar() {
  const { t, i18n } = useTranslation(); // Access the translation instance
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for controlling the dropdown

  const handleMenuToggle = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  const updateButtonVisibility = () => {
    setIsButtonVisible(window.innerWidth > 960);
  };

  useEffect(() => {
    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility);

    return () => {
      window.removeEventListener('resize', updateButtonVisibility);
    };
  }, []);

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language based on selection
    setIsDropdownOpen(false); // Close dropdown after language selection
  };

  return (
    <nav className="navbar" aria-label={t('navbar.ariaLabel')}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label={t('navbar.goToHome')}>
          4CS <i className="fa-solid fa-user-shield"></i>
        </Link>
        <div 
          className="menu-icon" 
          onClick={handleMenuToggle} 
          aria-label={t('navbar.toggleNavigation')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleMenuToggle()} // Keyboard accessibility
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>{t('navbar.home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-links" onClick={closeMenu}>{t('navbar.aboutUs')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMenu}>{t('navbar.services')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMenu}>{t('navbar.contactUs')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links-mobile" onClick={closeMenu}>{t('navbar.signUp')}</Link>
          </li>
        </ul>

        {/* Language dropdown trigger with Globe Icon */}
        {isButtonVisible && (
          <Button linkTo='/signup' buttonStyle='btn--outline'>
            {t('navbar.signUp')}
          </Button>
        )}
        <div className="language-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)} aria-expanded={isDropdownOpen}>
          <FontAwesomeIcon icon={faGlobe} className="globe-icon" aria-label={t('navbar.changeLanguage')} />
          {/* Language dropdown */}
          {isDropdownOpen && (
            <ul className="language-options">
              <li onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
                English
              </li>
              <li onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>
                العربية
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
