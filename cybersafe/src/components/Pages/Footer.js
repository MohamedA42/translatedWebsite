// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../../../src/components/Pages/Footer.css'; // Ensure the path is correct for CSS

const Footer = () => {
    const { t } = useTranslation(); // Get the translation function

    return (
        <footer className="footer" role="contentinfo" lang="en">
            <div className="footer-content">
                {/* About Section */}
                <section className="footer-about">
                    <h2>{t('footer.aboutUs')}</h2>
                    <p>{t('footer.aboutUsDescription')}</p>
                </section>

                {/* Quick Links Section */}
                <section className="footer-links" aria-labelledby="quick-links">
                    <h2 id="quick-links">{t('footer.quickLinks')}</h2>
                    <ul>
                        <li><a href="/" aria-label={t('footer.home')}>{t('footer.home')}</a></li>
                        <li><a href="/about-us" aria-label={t('footer.aboutUsLink')}>{t('footer.aboutUsLink')}</a></li>
                        <li><a href="/services" aria-label={t('footer.services')}>{t('footer.services')}</a></li>
                        <li><a href="/contact-us" aria-label={t('footer.contactUs')}>{t('footer.contactUs')}</a></li>
                    </ul>
                </section>

                {/* Social Media Section */}
                <section className="footer-social-media" aria-labelledby="social-media">
                    <h2 id="social-media">{t('footer.followUs')}</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="footer-contact" aria-labelledby="contact-info">
                    <h2 id="contact-info">{t('footer.contactUs')}</h2>
                    <address>
                        <p>{t('footer.email')} <a href="mailto:info@yourcompany.com" aria-label="Send an email to info@yourcompany.com">info@yourcompany.com</a></p>
                        <p>{t('footer.phone')} <a href="tel:+123456789" aria-label="Call us at +123-456-789">+123-456-789</a></p>
                        <p>{t('footer.address')} 123 Your Street, City, Country</p>
                    </address>
                </section>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <p dangerouslySetInnerHTML={{ __html: t('footer.footerBottom', { year: new Date().getFullYear() }) }} />
                <p>
                    <a href="/privacy-policy" aria-label={t('footer.privacyPolicy')}>{t('footer.privacyPolicy')}</a> | 
                    <a href="/terms-of-service" aria-label={t('footer.termsOfService')}>{t('footer.termsOfService')}</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer; // Ensure this is a default export
