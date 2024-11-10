import React, { useState } from 'react'; 
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../../../src/components/Pages/Services.css'; // Ensure correct path to your CSS file
import bannerImage from '../../../src/assets/images/pexels-photo-7857496.png'; // Importing banner image correctly

// Data for services with updated and verified icon links
const servicesData = [
  {
    id: 1,
    iconSrc: '/assets/images/pexels-photo-7857496.png', // Ensure this path is correct
    titleKey: 'services.websiteAppBuildingDesign',
    descriptionKey: 'services.websiteAppBuildingDescription',
  },
  {
    id: 2,
    iconSrc: 'https://img.icons8.com/ios-filled/50/000000/cyber-security.png',
    titleKey: 'services.cybersecurity',
    descriptionKey: 'services.cybersecurityDescription',
  },
  {
    id: 3,
    iconSrc: 'https://img.icons8.com/ios-filled/50/000000/consulting.png',
    titleKey: 'services.consulting',
    descriptionKey: 'services.consultingDescription',
  },
  {
    id: 4,
    iconSrc: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png',
    titleKey: 'services.seoOptimization',
    descriptionKey: 'services.seoOptimizationDescription',
  },
  {
    id: 5,
    iconSrc: 'https://img.icons8.com/ios-filled/50/000000/digital-marketing.png',
    titleKey: 'services.digitalMarketing',
    descriptionKey: 'services.digitalMarketingDescription',
  },
  {
    id: 6,
    iconSrc: 'https://img.icons8.com/ios-filled/50/000000/maintenance.png',
    titleKey: 'services.maintenance',
    descriptionKey: 'services.maintenanceDescription',
  },
];

function Services() {
  const { t } = useTranslation(); // Initialize translation hook
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const toggleService = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <div className="services">
      <header className="banner">
        <img
          src={bannerImage}
          alt={t('services.bannerImageAlt')}
          className="banner-image"
        />
        <div className="banner-content">
          <h1>{t('services.bannerTitle')}</h1>
          <p>{t('services.bannerDescription')}</p>
        </div>
      </header>

      <section className="services-list">
        {servicesData.map(({ id, iconSrc, titleKey, descriptionKey }, index) => (
          <div
            key={id}
            className="service-card"
            onClick={() => toggleService(id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && toggleService(id)}
          >
            <div className="icon">
              <img src={iconSrc} alt={`${t(titleKey)} icon`} className="service-icon" />
            </div>
            <h2>{t(titleKey)}</h2>
            {expandedServiceId === id && <p className="description">{t(descriptionKey)}</p>}
          </div>
        ))}
      </section>

      <div className="cta">
        <h2>{t('services.ctaTitle')}</h2>
        <p>{t('services.ctaDescription')}</p>
        <button className="cta-button">{t('services.ctaButton')}</button>
      </div>
    </div>
  );
}

export default Services;
