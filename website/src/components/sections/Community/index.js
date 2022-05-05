import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as communityStyles from './community.module.css';

import DiscordButton from '../../DiscordButton';
import TwitterLogo from '../../../images/social/twitter.svg';
import InstagramLogo from '../../../images/social/instagram.svg';
import OpenseaLogo from '../../../images/social/opensea.svg';
import DiscordLogo from '../../../images/social/discord_black.svg';
import Nebula5 from '../../../images/nebulas/5.png';

const Community = () => {

  const socialLinks = [
    { component: TwitterLogo, url: 'https://twitter.com/brgrvrs' },
    { component: InstagramLogo, url: 'https://www.instagram.com/brgrvrs/' },
    { component: DiscordLogo, url: 'https://discord.com/invite/uNaekTWeKt' }
  ].map(
    ({ component, url }) =>
      <a href={url} className={communityStyles.socialLink}>
        {React.createElement(component, { className: communityStyles.socialIcon })}
      </a>
  );

  return (
      <section className={communityStyles.container} id='membership'>
        <div className={communityStyles.showcaseContainer}>
          <StaticImage src="../../../images/showcase/community-banner.png" placeholder="tracedSVG" />        
        </div>

        <div className={communityStyles.contentContainer}>
          <h2 className={communityStyles.title}>Join the Community</h2>
          
          <p className={communityStyles.firstParagraph}>
            A community for nft and burger enthusiasts from all around the Universe.
          </p>

          <p className={communityStyles.secondParagraph}>Join the number one virtual platform for all things tasty.</p>
          
          <div className={communityStyles.socials}>
            {socialLinks}
          </div>

          <DiscordButton className={communityStyles.discordButton}/>
        </div>
      </section>
  );
};

export default Community;