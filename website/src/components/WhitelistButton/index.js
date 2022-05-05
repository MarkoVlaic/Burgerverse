import React from 'react';
import * as buttonStyles from './whitelistButton.module.css'

const WhitelistButton = ({ secondAccentColor, className }) => {
  const accentClass = secondAccentColor ? buttonStyles.accentTwo : buttonStyles.accentOne;
  const appliedClass = `${buttonStyles.button} ${accentClass} ${className}`;

  return (
    <a href='#' className={appliedClass}>
      get whitelisted
    </a>
  );
};

export default WhitelistButton;