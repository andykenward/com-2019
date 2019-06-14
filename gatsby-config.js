module.exports = {
  siteMetadata: {
    title: `Andy Kenward - Senior Front-End Engineer`,
    description: `Andy Kenward, Senior Front-End Engineer in London, England`,
    author: `@andykenward`,
    tags: [
      { title: "TypeScript", url: "https://www.typescriptlang.org" },
      {
        title: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "React",
        url: "https://reactjs.org",
      },
      { title: "GraphQL", url: "https://graphql.org" },
      {
        title: "Redux",
        url: "https://redux.js.org",
      },
      { title: "Apollo", url: "https://www.apollographql.com" },
      { title: "Jest", url: "https://jestjs.io" },
      { title: "Cypress", url: "https://cypress.io" },
    ],
    heading: {
      name: "Andy Kenward",
      role: "Senior Front-End Engineer",
      email: "mailto:hello@andykenward.com",
      github: "https://github.com/andykenward",
    },
    projects: [
      {
        title: "Ray-Ban Site Redesign",
        client: "Ray-Ban",
        role: "Lead Front-End Developer",
        tags: [
          {
            title: "React",
            url: "https://reactjs.org",
          },
          { title: "GraphQL", url: "https://graphql.org" },
          { title: "Apollo", url: "https://www.apollographql.com" },
          { title: "Jest", url: "https://jestjs.io" },
          { title: "Cypress", url: "https://cypress.io" },
          { title: "StoryBook", url: "https://storybook.js.org" },
        ],
        caseUrl: "https://www.stinkstudios.com/work/rayban-raybancom-redesign",
      },
      {
        title: "Switchboard",
        client: "Stink Studios",
        role: "Lead Front-End Developer",
        tags: [
          { title: "TypeScript", url: "https://www.typescriptlang.org" },
          {
            title: "React",
            url: "https://reactjs.org",
          },
          { title: "GraphQL", url: "https://graphql.org" },
          { title: "Apollo", url: "https://www.apollographql.com" },
          { title: "Jest", url: "https://jestjs.io" },
          { title: "Cypress", url: "https://cypress.io" },
        ],
        siteUrl: "https://switchboard.stink.co",
      },
      {
        title: "The Hidden Worlds Of The National Parks",
        client: "Google",
        role: "Lead Front-End Developer",
        siteUrl: "https://g.co/nationalparks",
        tags: [
          {
            title: "React",
            url: "https://reactjs.org",
          },

          {
            title: "Redux",
            url: "https://redux.js.org",
          },
          { title: "Three.js", url: "https://threejs.org" },
        ],
        caseUrl:
          "https://www.stinkstudios.com/work/google-the-hidden-worlds-of-the-national-parks",
      },
      {
        title: "35th Anniversary",
        client: "i-D",
        role: "Sole Developer",
        tags: [
          {
            title: "React",
            url: "https://reactjs.org",
          },
          { title: "SSR" },
          { title: "Flux", url: "https://facebook.github.io/flux/" },
          {
            title: "ImmutableJS",
            url: "https://immutable-js.github.io/immutable-js/",
          },
          { title: "Node", url: "https://nodejs.org/en/" },
        ],
        siteUrl: "http://covers.i-d.co/",
        caseUrl: "https://www.stinkstudios.com/work/35th-anniversary",
      },
      {
        title: "Inside Abbey Road",
        client: "Google",
        role: "Senior Front-End Developer",
        tags: [
          { title: "Backbone", url: "https://backbonejs.org" },
          { title: "Marionette", url: "https://marionettejs.com" },
          { title: "Three.js", url: "https://threejs.org" },
        ],
        caseUrl: "https://www.stinkstudios.com/work/inside-abbey-road",
      },
      {
        title: "Performing Arts",
        client: "Google",
        role: "Lead Front-End Developer",
        tags: [
          { title: "Backbone", url: "https://backbonejs.org" },
          { title: "Marionette", url: "https://marionettejs.com" },
          { title: "Three.js", url: "https://threejs.org" },
        ],
        siteUrl: "https://performingarts.withgoogle.com/",
        caseUrl: "https://www.stinkstudios.com/work/performing-arts",
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
        name: `Andy Kenward - Front-End Engineer`,
        short_name: `Andy Kenward`,
        start_url: `/`,
        background_color: `rgb(216,234,204)`,
        theme_color: `rgb(216,234,204)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
  ],
}
