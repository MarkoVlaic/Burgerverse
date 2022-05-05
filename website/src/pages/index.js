import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import debounce from 'debounce';

import Navbar from '../components/sections/Navbar';
import Header from '../components/sections/header';
import Description from '../components/sections/Description';
import Roadmap from '../components/sections/Roadmap';
import Timeline from '../components/sections/Timeline';
import Chefs from '../components/sections/Chefs';
import Community from '../components/sections/Community';
import FAQ from '../components/sections/FAQ';
import Social from '../components/sections/Social';
import Rocks from '../components/Rocks';
import Nebulas from '../components/Nebulas';

import * as indexStyles from '../css/index.module.css';

const IndexPage = () => {
  return (
    <>
    <Helmet>
      <title>Burgerverse</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Helmet>
    <div className={indexStyles.content}>
      <Navbar />
      <main>
        <Header />
        <Description />
        <Roadmap />
        <Timeline />
        <Community />
        <Chefs />
        <FAQ />
        <Social />
      </main>

      <footer className={indexStyles.footer}>
        <p>Copyright @2022 Burgerverse. All trademarks and copyrights reserved.</p>
      </footer>
      <Rocks />
      <Nebulas />
    </div>
    </>
  );
};

export default IndexPage;