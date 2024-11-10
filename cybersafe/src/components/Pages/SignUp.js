import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importing the useTranslation hook
import './SignUp.css'; // Ensure SignUp.css is in the same folder as SignUp.js
import bannerImage from '../../assets/images/Join Our Community.jpeg'; // Updated the image path

const SignUp = () => {
    const { t } = useTranslation(); // Initialize the translation function
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = t('signup.errors.usernameRequired');
        if (!formData.email) {
            newErrors.email = t('signup.errors.emailRequired');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('signup.errors.emailInvalid');
        }
        if (!formData.password) {
            newErrors.password = t('signup.errors.passwordRequired');
        } else if (formData.password.length < 6) {
            newErrors.password = t('signup.errors.passwordLength');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            setTimeout(() => {
                console.log(formData);
                setSuccessMessage(t('signup.success'));
                setFormData({ username: '', email: '', password: '' });
                setLoading(false);
            }, 1000);
        }
    };

    return (
        <div className="signup-container">
            {/* Banner Section */}
            <div className="banner">
                <img 
                    className="banner-image" 
                    src={bannerImage} 
                    alt={t('signup.banner.alt')} // Use translation for alt text
                />
                <div className="banner-content">
                    <h1>{t('signup.banner.title')}</h1>
                    <p>{t('signup.banner.description')}</p>
                </div>
            </div>

            {/* Sign-up Form Section */}
            <form onSubmit={handleSubmit} className="signup-form contact-form">
                <h2>{t('signup.form.title')}</h2>

                {/* Username Field */}
                <div className="form-group">
                    <label htmlFor="username">
                        <img src="https://via.placeholder.com/20?text=U" alt={t('signup.labels.usernameIcon')} className="form-icon" />
                        {t('signup.labels.username')}
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={`form-input ${errors.username ? 'error' : ''}`}
                        required
                        placeholder={t('signup.placeholders.username')}
                        aria-describedby="username-error"
                        aria-invalid={errors.username ? "true" : "false"}
                    />
                    {errors.username && (
                        <p id="username-error" className="error-message" aria-live="polite">
                            {errors.username}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email">
                        <img src="https://via.placeholder.com/20?text=@E" alt={t('signup.labels.emailIcon')} className="form-icon" />
                        {t('signup.labels.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        required
                        placeholder={t('signup.placeholders.email')}
                        aria-describedby="email-error"
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                        <p id="email-error" className="error-message" aria-live="polite">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label htmlFor="password">
                        <img src="https://via.placeholder.com/20?text=P" alt={t('signup.labels.passwordIcon')} className="form-icon" />
                        {t('signup.labels.password')}
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-input ${errors.password ? 'error' : ''}`}
                        required
                        placeholder={t('signup.placeholders.password')}
                        aria-describedby="password-error"
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && (
                        <p id="password-error" className="error-message" aria-live="polite">
                            {errors.password}
                        </p>
                    )}
                </div>

                <button type="submit" className="btn btn--primary btn--medium" disabled={loading}>
                    {loading ? t('signup.buttons.loading') : t('signup.buttons.submit')}
                </button>

                {successMessage && <p className="success-message" aria-live="polite">{successMessage}</p>}
            </form>
        </div>
    );
};

export default SignUp;
