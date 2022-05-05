import React from 'react';

const HamburgerIcon = ({ className, onClick }) => {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40" className={className} onClick={onClick}>
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );
};

export default HamburgerIcon;