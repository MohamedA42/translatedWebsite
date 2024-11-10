import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/components/Pages/ContactUs.css';
import contactImage from '../../../src/assets/images/pexels-photo-12231824.jpeg';

const ContactUs = () => {
    const { t } = useTranslation(); // Access the translation function
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form is submitted

        // Simulating form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(formData);
        
        setSuccessMessage(t('contactUs.successMessage')); // Use translation
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
    };

    return (
        <div className="contact-container">
            <div className="contact-image">
                <img
                    src={contactImage}
                    alt={t('contactUs.imageAlt')}
                    className="contact-image"
                />
            </div>

            <div className="contact-info">
                <h2>{t('contactUs.contactInfo.title')}</h2>
                <p><strong>{t('contactUs.contactInfo.phone')}: </strong> (123) 456-7890</p>
                <p><strong>{t('contactUs.contactInfo.email')}: </strong> contact@yourcompany.com</p>
                <p><strong>{t('contactUs.contactInfo.address')}: </strong> 123 Main St, Anytown, USA</p>
            </div>

            <div className="map-container">
                <h2>{t('contactUs.map.title')}</h2>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509644!2d144.9537353153182!3d-37.8172099797514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1f3d77%3A0x5045675218cee50!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">{t('contactUs.form.name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('contactUs.form.email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contactUs.form.message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? t('contactUs.form.sending') : t('contactUs.form.sendMessage')}
                </button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default ContactUs;
