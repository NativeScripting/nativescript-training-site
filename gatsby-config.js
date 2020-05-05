module.exports = {
  siteMetadata: {
    siteName: `NativeScript Training`,
    siteUrl: `https://nativescript.training`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
        
                  allSitePage {
                    edges {
                      node {
                        path
                      }
                    }
                  }
              }`,
      },
    },
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KWKPRVV',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-98718768-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    'gatsby-plugin-react-helmet',
    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
