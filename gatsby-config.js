module.exports = {
  siteMetadata: {
    title: `Martin Singstad`,
    description: ``,
    author: `@msingstad`,
  },
  plugins: [
    /* `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `msingstad`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `minimal-ui`,
        icon: `src/images/MS-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
