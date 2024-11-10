// src/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // No longer needed since buttons are removed
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      Cookies.set('i18next', lng, { expires: 365 }); // Save language preference to cookie
    }).catch((error) => {
      console.error(`Error changing language to ${lng}:`, error);
    });
  };

  return (
    <div>
      {/* Removed language buttons */}
    </div>
  );
};

export default LanguageSwitcher;
