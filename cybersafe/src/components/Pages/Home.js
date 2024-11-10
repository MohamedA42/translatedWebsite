import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './Home.css'; // Import your CSS file for styling
import FullSizeRender from './../../assets/videos/FullSizeRender.MOV'; // Import your video

const Card = ({ title, content }) => (
    <div className="card">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);

const Home = () => {
    const { t } = useTranslation(); // Initialize translation

    return (
        <div className="home-container">
            <header className="banner">
                <video autoPlay loop muted className="banner-video">
                    <source src={FullSizeRender} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="banner-text">
                    <h1>{t('home.welcome')}</h1>
                    <p>{t('home.tagline')}</p>
                </div>
            </header>

            <section className="services">
                <h2>{t('home.services.title')}</h2>
                <div className="cards-container">
                    <Card title={t('home.services.cards.customDesign.title')} content={t('home.services.cards.customDesign.content')} />
                    <Card title={t('home.services.cards.responsiveDevelopment.title')} content={t('home.services.cards.responsiveDevelopment.content')} />
                    <Card title={t('home.services.cards.contentManagement.title')} content={t('home.services.cards.contentManagement.content')} />
                    <Card title={t('home.services.cards.seo.title')} content={t('home.services.cards.seo.content')} />
                </div>
            </section>

            <section className="cybersecurity">
                <h2>{t('home.cybersecurity.title')}</h2>
                <div className="cards-container">
                    <Card title={t('home.cybersecurity.tips.strongPasswords.title')} content={t('home.cybersecurity.tips.strongPasswords.content')} />
                    <Card title={t('home.cybersecurity.tips.twoFactor.title')} content={t('home.cybersecurity.tips.twoFactor.content')} />
                    <Card title={t('home.cybersecurity.tips.softwareUpdates.title')} content={t('home.cybersecurity.tips.softwareUpdates.content')} />
                    <Card title={t('home.cybersecurity.tips.dataBackup.title')} content={t('home.cybersecurity.tips.dataBackup.content')} />
                </div>
            </section>

            <section className="call-to-action">
                <h2>{t('home.callToAction.title')}</h2>
                <p>{t('home.callToAction.content')}</p>
                <button className="cta-button">{t('home.callToAction.button')}</button>
            </section>
        </div>
    );
};

export default Home;
