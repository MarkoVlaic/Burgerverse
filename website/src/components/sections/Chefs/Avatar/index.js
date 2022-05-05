import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as avatarStyles from './avatar.module.css';

const Avatar = ({ name, role, imageData, active }) => {
  const image = getImage(imageData);
  const containerClass = active ? avatarStyles.avatarContainer : `${avatarStyles.avatarContainer} ${avatarStyles.inactive}`;

  return (
    <div className={containerClass}>
      <GatsbyImage image={image} className={avatarStyles.image} />
      <h4 className={avatarStyles.name}>{name}</h4>
      <p className={avatarStyles.role}>{role}</p>
    </div>
  );
};

export default Avatar;