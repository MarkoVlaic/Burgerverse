import React, {useState} from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';

import HamburgerIcon from '../../HamburgerIcon';
import DiscordButton from '../../DiscordButton';

import * as navStyles from './navbar.module.css';
import TwitterLogo from '../../../images/social/twitter.svg'
import InstagramLogo from '../../../images/social/instagram.svg'
import OpenseaLogo from '../../../images/social/opensea.svg';
import DiscordLogo from '../../../images/social/discord_black.svg';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const collapsedClass = collapsed ? navStyles.collapsed : '';

  const toggleCollapsed = () => {
    console.log('col');
    setCollapsed(c => !c);
  }
  
  const menuItems = [
    { url: '#roadmap', text: 'TASTY ROADMAP'},
    { url: '#timeline', text: 'PROJECT TIMELINE'},
    { url: '#chefs', text: 'MEET THE CHEFS'},
    { url: '#social', text: 'SOCIALS'}
  ].map(({ url, text }) => 
    <AnchorLink to={url} className={navStyles.link} onAnchorLinkClick={() => toggleCollapsed()}>{text}</AnchorLink>
  );

  return (
    <div className={collapsedClass}>
      <nav className={navStyles.navbar}>
        <div className={navStyles.left}>
          <div className={navStyles.logoContainer}>
            <StaticImage
              src='../../../images/logo-small.png'
              width={70}
              height={70}
              placeholder='tracedSVG'
            />
          </div>

            <div className={navStyles.navigation}>
              { menuItems }
            </div>

        </div>
        <div className={navStyles.social}>
          <a href='https://twitter.com/brgrvrs'><TwitterLogo className={navStyles.twitter} /></a>
          <a href='https://www.instagram.com/brgrvrs/' className={navStyles.mobile}><InstagramLogo className={`${navStyles.instagram}`} /></a>
          <a href='#'><OpenseaLogo className={navStyles.opensea} /></a>
          <a href='https://discord.com/invite/uNaekTWeKt'>
            <div className={navStyles.discordContainer}>
                <p className={navStyles.discordText}><span className={navStyles.discordHide}>JOIN</span> DISCORD</p>
                <DiscordLogo className={navStyles.discordLogo} />
            </div>
          </a>
        </div>
      </nav>

      <HamburgerIcon
        className={navStyles.menuIcon}
        onClick={() => toggleCollapsed()}
      />
    </div>
  );
};

export default Navbar;