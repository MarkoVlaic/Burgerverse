import React from 'react';
import * as squareStyles from './square.module.css'

const Square = ({ size, rotation, style }) => {
  const computedStyle = {
    width: size,
    height: size,
    transform: `rotate(${rotation})`,
    ...style
  };
  return (
    <div className={squareStyles.square} style={computedStyle}></div>
  );
};

export default Square;