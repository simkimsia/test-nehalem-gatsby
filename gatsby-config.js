module.exports = {
  plugins: [
  {
    resolve: `@nehalist/gatsby-theme-nehalem`,
    options: { // optional theme options
        // location to our content
        contentPath: `content`,
        // the page manifest
        manifest: {
        name: `nehalem - A Gatsby theme`,
        short_name: `nehalem`,
        start_url: `/`,
        background_color: `#a4cbb8`,
        theme_color: `#a4cbb8`,
        display: `minimal-ui`,
        icon: `${__dirname}/assets/nehalist-gatsby.png`
        },
        // if archive pages should be generated automatically
        loadDefaultPages: true,
        // posts shown on the front page
        postsPerPage: 5
    }
  }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
