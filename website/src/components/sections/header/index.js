import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import WhitelistButton from '../../WhitelistButton';

import * as headerStyles from './header.module.css';

import PosterImage from '../../../images/hero.png';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <video className={headerStyles.video} autoPlay muted loop poster={PosterImage} playsInline>
        {/* <source src={HeaderAnimationMP4} type="video/mp4" /> */}
        <source src="https://website-resources-bucket.s3.eu-central-1.amazonaws.com/animation.webm" type="video/webm" />
        <source src="https://website-resources-bucket.s3.eu-central-1.amazonaws.com/animation.mp4" type="video/mp4" />
      </video>
      <div className={headerStyles.iosPoster}><StaticImage src="../../../images/hero.png" placeholder="blurred" /></div>
    </header>
  );
};

export default Header;