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
    // Your site title
    title: `nehalem`,
    // Your site url
    siteUrl: `https://nehalem.netlify.com`,
    // Your site description
    description: `A Gatsby theme for %TOPICS%`,
    // These topics will be inserted at %TOPICS% in the description and used for the Typed component
    topics: [
      `bloggers`,
      `geeks`,
      `nerds`,
      `people`,
      `everyone`
    ],
    // The main menu
    menu: [
      {
        name: 'Home',
        path: '/posts/test'
      }
    ],
    // Links in the footer
    footerMenu: [
      {
        name: 'RSS',
        path: '/rss.xml'
      },
    ],
    // En- or disable search
    search: true,
    // Basically who are you and where to find you
    author: {
      name: `nehalem`,
      description: `I'm <strong>nehalem</strong>, a Gatsby theme by 
      <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. Go get me on 
      <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">GitHub</a> and don't forget to leave
      a star in case you like me!`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/nehalist`,
        linkedin: `https://www.linkedin.com/in/kevin-hirczy-7a9377106/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/nehalist`,
        twitch: ``
      }
    }
  }
}
