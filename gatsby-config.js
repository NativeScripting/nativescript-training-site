module.exports = {
  siteMetadata: {
    siteName: `NativeScript Training`,
    siteUrl: `https://nativescript.training`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-transformer-json`,
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    'gatsby-plugin-react-helmet',
    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
