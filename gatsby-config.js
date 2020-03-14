module.exports = {
  pathPrefix: `1959-what-a-year`,
  siteMetadata: {
    title: `1959. A monumental year in Jazz music.`,
    description: `The stories behind some of the greatest jazz albums.`,
    author: `@1959`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `1959-starter-default`,
        short_name: `1959`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/1959-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-stripe`,
  ],
}
