module.exports = {
  siteMetadata: {
    title: `glorypraisewrites.codes`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to my personal blog, I will be writing on frontend web development and productivity tips every now and then. Stay connected!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/emmaglorypraise`,
      },
      {
        name: `github`,
        url: `https://github.com/emmaglorypraise`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/emmaglorypraise/`,
      },
      {
        name: `website`,
        url: `https://emmaglorypraise.me`,
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
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
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
