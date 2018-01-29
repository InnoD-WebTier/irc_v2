module.exports = {
  siteMetadata: {
    title: `InnoD Web Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/case-competitions`,
        name: 'competitions',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/events`,
        name: 'events',
      },
    },
    { 
      resolve: 'gatsby-transformer-remark', 
      options: { 
        plugins: [],
      },
    },
  ],
  pathPrefix: `/irc_v2`,
}
