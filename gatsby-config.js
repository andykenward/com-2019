module.exports = {
  siteMetadata: {
    title: `Andy Kenward - Senior Front-End Engineer`,
    description: `Andy Kenward, Senior Front-End Engineer in London, England`,
    author: `@andykenward`,
    tags: [
      "TypeScript",
      "JavaScript",
      "React",
      "GraphQL",
      "Redux",
      "Apollo",
      "Jest",
      "Cypress",
    ],
    projects: [
      {
        title: "Ray-Ban site redesign",
        client: "Ray-Ban",
        caseUrl: "https://www.stinkstudios.com/work/rayban-raybancom-redesign",
      },
      {
        title: "The Hidden Worlds Of The National Parks",
        client: "Google",
        siteUrl: "https://g.co/nationalparks",
        caseUrl:
          "https://www.stinkstudios.com/work/google-the-hidden-worlds-of-the-national-parks",
      },
      {
        title: "Inside Abbey Road",
        caseUrl: "https://www.stinkstudios.com/work/inside-abbey-road",
      },
      {
        title: "Performing Arts",
        siteUrl: "https://performingarts.withgoogle.com/",
        caseUrl: "https://www.stinkstudios.com/work/performing-arts",
      },
      {
        title: "35th Anniversary",
        siteUrl: "http://covers.i-d.co/",
        caseUrl: "https://www.stinkstudios.com/work/35th-anniversary",
      },
    ],
    contact: [
      {
        title: "Email",
        url: "mailto:hello@andykenward.com",
      },
      {
        title: "GitHub",
        url: "https://github.com/andykenward",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/andykenward",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/andykenward",
      },
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/story/andykenward",
      },
    ],
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
  ],
}
