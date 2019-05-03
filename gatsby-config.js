const path = require('path');

module.exports = (options) => {
    const {
        title,
        description,
        author,
        twitter
    } = options;

    return {
        siteMetadata: {
            title,
            description,
            author,
            twitter
          },
        plugins: [
            {
                resolve: 'gatsby-plugin-page-creator',
                options: {
                  path: path.join(__dirname, "src", "pages"),
                },
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                  path: path.join(__dirname, 'src', 'pages'),
                },
            },
            {
                resolve: `gatsby-plugin-google-fonts`,
                options: {
                  fonts: [
                    `Montserrat`,
                    `source sans pro\:300,400,400i,700`
                  ]
                }
              },
              {
                resolve: `gatsby-plugin-typescript`,
                options: {
                  isTSX: true, // defaults to false
                  jsxPragma: `jsx`, // defaults to "React"
                  allExtensions: true, // defaults to false
                },
              },
              'gatsby-plugin-react-helmet',
              'gatsby-plugin-emotion',
        ]
    }
}