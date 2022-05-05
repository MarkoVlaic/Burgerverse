import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as socialStyles from './social.module.css';
import DiscordLogo from '../../../images/social/discord_black.svg';
import TwitterLogo from '../../../images/social/twitter.svg';
import InstagramLogo from '../../../images/social/instagram.svg';
import OpenseaLogo from '../../../images/social/opensea.svg';

const Social = () => {
  return (
    <section className={socialStyles.container} id='social'>
      {/* <h2 className={socialStyles.title}>burgerverse</h2> */}
      <StaticImage 
        src={'../../../images/logo.png'}
        placeholder='tracedSVG'
        className={socialStyles.logo}
      />
      <p className={socialStyles.text}>Join our community and stay up to date with activities.</p>
      <div className={socialStyles.iconContainer}>
        <a href="https://discord.com/invite/uNaekTWeKt"><DiscordLogo className={socialStyles.icon} /></a>
        <a href="https://twitter.com/brgrvrs"><TwitterLogo className={socialStyles.icon} /></a>
        <a href="https://www.instagram.com/brgrvrs/"><InstagramLogo className={socialStyles.icon} /></a>
        <a href="#"><OpenseaLogo className={socialStyles.icon} /></a>
      </div>
    </section>
  );
};

export default Social;