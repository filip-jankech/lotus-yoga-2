module.exports = {
  siteMetadata: {
    title: `Lotus Yoga`,
    description: `Yoga je cesta dovnitř k sobě samému, cesta za naši mysl, až k pochopení toho, kdo je to ten pozorovatel.`,
    author: `h-optimal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lotus-yoga-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150
      }
    },
  ],
}
