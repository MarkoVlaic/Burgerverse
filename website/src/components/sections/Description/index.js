import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import DiscordButton from '../../DiscordButton';
import Square from '../../Square'

import * as descriptionStyles from './description.module.css';

const Description = () => {
  return (
    <section className={descriptionStyles.description}>
      <div className={descriptionStyles.contentContainer}>
        <h2>What's on the Menu?</h2>
        <div className={descriptionStyles.textContainer}>
          <p className={descriptionStyles.contentParagraph}>
          Can you smell that?! It’s the smell of our Burgers that’s
          spreading throughout the cosmos. Our chefs are
          making 7,777 unique 2D hand-drawn digital NFT
          Burgers for all of you diehard burger lovers out there.
          Each Burger is a complex combo of the bizarrest
          interdimensional flavors and ingredients from all over

          the Metaverse.
          </p>
          <p className={descriptionStyles.contentParagraph}>
          To get your own, make sure to join our official
          Burgerverse Discord Community and find out how to
          get whitelisted.
          </p>

          <p className={descriptionStyles.saleInfo}>Pre-sale: Coming soon</p>
          <p className={descriptionStyles.saleInfo}>Public Sale: Coming soon</p>
        </div>
        <DiscordButton className={descriptionStyles.discordButton} />
      </div>
      <div className={descriptionStyles.showcaseContainer}>
        <span className={descriptionStyles.bannerDesktop}><StaticImage src="../../../images/showcase/description-banner.png" placeholder="blurred"/></span>
        <span className={descriptionStyles.bannerMobile}><StaticImage src="../../../images/showcase/description-banner-mobile.png" placeholder="blurred" /></span>
      </div>
    </section>
  );
};

export default Description;