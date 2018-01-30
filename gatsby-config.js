module.exports = {
  siteMetadata: {
    title: `IRC Berkeley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
//    `gatsby-plugin-eslint`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/case-competitions`,
        name: 'caseCompetitions',
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
      //options: { 
        //plugins: [],
      //},
    },
  ],
  pathPrefix: `/~ircb`,
}
