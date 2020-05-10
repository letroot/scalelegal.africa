module.exports = {
  siteMetadata: {
    title: `Blog :: ScaleLegal Africa`,
    name: `ScaleLegal Africa`,
    siteUrl: `https://blog.scalelegal.africa`,
    description: `The ScaleLegal Africa Blog. Scaling and Securing your Business with Legal Insight.`,
    hero: {
      heading: `Welcome to the ScaleLegal Africa Blog. Scaling and Securing your Business with Legal Insight.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `facebook`,
        url: `https://facebook.com/ScaleLegalAfrica`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/scalelegal.africa`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/scalelegal.africa`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/scalelegalafrica/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        mailchimp: true,
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see plugin repo for instructions
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
