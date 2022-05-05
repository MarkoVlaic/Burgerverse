const autoprefixer = require('autoprefixer');
const postcssReporter = require('postcss-reporter');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "brgrvrs",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-transformer-json',
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "chefs",
        path: `${__dirname}/src/images/chefs`,
      },
      __key: "chefs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "timeline",
        path: `${__dirname}/src/images/timeline`,
      },
      __key: "timeline",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "rocks",
        path: `${__dirname}/src/images/rocks`,
      },
      __key: "rocks",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "nebulas",
        path: `${__dirname}/src/images/nebulas`,
      },
      __key: "nebulas",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
      __key: "content",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Burgerverse`,
        short_name: `brgrvrs`,
        start_url: `/`,
        icon: 'src/images/logo-small.png',
        background_color: `#190C33`,
        theme_color: `#FC51B3`,
        display: `standalone`,
      }
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '2a8891b2aeaeeb8132b03c43f6385c',
      }
    }
    // {
    //   resolve: `gatsby-plugin-postcss`
    // },
  ],
};
