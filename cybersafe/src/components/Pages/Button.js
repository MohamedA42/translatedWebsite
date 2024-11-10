// src/components/Button.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'; // Ensure you have this CSS file for styling

const Button = ({ linkTo, buttonStyle, children }) => {
  return (
    <Link to={linkTo} className={`btn ${buttonStyle}`}>
      {children}
    </Link>
  );
};

export default Button; // This is a default export
