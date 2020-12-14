module.exports = {
  plugins: [
    {
      resolve: `@hangindev/gatsby-theme-courses`,
      options: {
        contentPath: 'content/courses',
      },
    },
  ],
  siteMetadata: {
    title: `Courses online`,
    author: `Hangindev`,
    description: `A Gatsby theme for building course platform. Support autoplay, bookmark & progress tracking. Use Youtube as video host`,
    social: [
      {
        name: `github`,
        url: `https://github.com/bookbysru`,
      },
    ],
  },
};
