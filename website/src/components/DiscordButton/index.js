import React from 'react';

import * as discordStyles from './discordButton.module.css';
import DiscordLogo from '../../images/social/discord_black.svg';

const DiscordButton = ({ className }) => {
  return (
    <a href='https://discord.com/invite/uNaekTWeKt' className={` ${discordStyles.link} ${className}`}>
      <div className={discordStyles.container}>
          <p className={discordStyles.text}><span className={discordStyles.mobileHide}>JOIN</span> DISCORD</p>
          <DiscordLogo className={discordStyles.logo} />
      </div>
    </a>
  );
};

export default DiscordButton;