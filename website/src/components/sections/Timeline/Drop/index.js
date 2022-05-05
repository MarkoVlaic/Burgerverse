import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import * as dropStyles from './drop.module.css';

const Drop = ({ stamp, date, number, title, body, queriedImage, active }) => {
  console.log(queriedImage);
  const image = getImage(queriedImage);

  const containerClass = active ? dropStyles.container : `${dropStyles.container} ${dropStyles.inactive}`

  return (
    <div className={containerClass}>
      <div className={dropStyles.header}>
        <h4 className={dropStyles.stamp}>{stamp}</h4>
        <h3 className={dropStyles.date}>{date}</h3>
      </div>

      <div className={dropStyles.image}><GatsbyImage image={image} /></div>
      <div className={dropStyles.titleContainer}>
        <p className={dropStyles.number}>{number}</p>
        <h2 className={dropStyles.title}>{title}</h2>
      </div>
      <p className={dropStyles.body}>{body}</p>
    </div>
  );
};

export default Drop;