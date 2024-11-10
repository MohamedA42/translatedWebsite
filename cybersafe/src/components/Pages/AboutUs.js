import React from 'react';
import { useTranslation } from 'react-i18next';
import './../../../src/components/Pages/AboutUs.css';

function AboutUs() {
    const { t } = useTranslation(); // Initialize translation

    const teamMembers = [
        {
            name: 'Alex Johnson',
            role: t('aboutUs.teamMembers.role1'),
            description: t('aboutUs.teamMembers.description1'),
            imgSrc: 'https://via.placeholder.com/200',
            imgAlt: 'Alex Johnson',
        },
        {
            name: 'Emily Davis',
            role: t('aboutUs.teamMembers.role2'),
            description: t('aboutUs.teamMembers.description2'),
            imgSrc: 'https://via.placeholder.com/200',
            imgAlt: 'Emily Davis',
        },
        {
            name: 'Michael Brown',
            role: t('aboutUs.teamMembers.role3'),
            description: t('aboutUs.teamMembers.description3'),
            imgSrc: 'https://via.placeholder.com/200',
            imgAlt: 'Michael Brown',
        }
    ];

    const values = [
        {
            title: t('aboutUs.values.title1'),
            description: t('aboutUs.values.description1'),
        },
        {
            title: t('aboutUs.values.title2'),
            description: t('aboutUs.values.description2'),
        },
        {
            title: t('aboutUs.values.title3'),
            description: t('aboutUs.values.description3'),
        },
        {
            title: t('aboutUs.values.title4'),
            description: t('aboutUs.values.description4'),
        }
    ];

    const handleClick = () => {
        console.log('Button was clicked!');
    };

    return (
        <div className="about-us">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>{t('aboutUs.hero.title')}</h1>
                    <p>{t('aboutUs.hero.description')}</p>
                    <button onClick={handleClick}>{t('aboutUs.hero.button')}</button>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="story">
                <div className="story-content">
                    <h2>{t('aboutUs.story.title')}</h2>
                    <p>{t('aboutUs.story.description1')}</p>
                    <p>{t('aboutUs.story.description2')}</p>
                </div>
            </section>

            {/* Values Section */}
            <section className="values">
                <h2>{t('aboutUs.values.title')}</h2>
                <div className="values-container">
                    {values.map((value, index) => (
                        <div className="value-item" key={index}>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="team">
                <h2>{t('aboutUs.team.title')}</h2>
                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index}>
                            <img 
                                src={member.imgSrc} 
                                alt={member.imgAlt} 
                                srcSet={`${member.imgSrc} 1x, ${member.imgSrc}@2x.jpg 2x`} 
                            />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Another button example */}
            <button onClick={handleClick}>{t('aboutUs.contactButton')}</button>
        </div>
    );
}

export default AboutUs;
