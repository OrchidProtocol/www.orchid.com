
require("dotenv").config({
  path: `.env.production`,
})

const { buildTimestampUTC } = require('./src/utils/currentTimestamp');

module.exports = {
  siteMetadata: {
    title: 'Blog - Orchid',
    description:
      'Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services.',
    siteUrl: (process.env.TARGET_LANG === "en" || !process.env.TARGET_LANG) ? 'https://blog.orchid.com/' : `https://blog.${process.env.TARGET_LANG}.orchid.com/`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-force-trailing-slashes`,
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: ``,
        mapping: {
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.url + '/',
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.url + '/',
                  custom_elements: edge.node.frontmatter.featuredimage ? [{
                    "content:encoded": `
                    <img style="width:100%; height: auto" src="${site.siteMetadata.siteUrl + edge.node.frontmatter.featuredimage.publicURL}" />
                    ${edge.node.html
                        .replace(/(href="\/)/i, 'href="https://blog.orchid.com/')
                        .replace(/(src="\/)/i, 'src="https://blog.orchid.com/')
                        .replace(/(href='\/)/i, 'href=\'https://blog.orchid.com/')
                        .replace(/(src='\/)/i, 'src=\'https://blog.orchid.com/')}`
                  }] : [],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: {
                      templateKey: { eq: "blog-post" }, 
                      public: { eq: true }, 
                      quite: { ne: true },
                      date: { lt: ${buildTimestampUTC} } 
                    } 
                  }
                ) {
                  edges {
                    node {
                      id
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        url
                        templateKey
                        public
                        date
                        featuredimage {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Orchid RSS feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            //match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            //link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: `https://blog.orchid.com`,
        graphQLQuery: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
              filter: { 
                frontmatter: {
                  templateKey: { eq: "blog-post" }, 
                  public: { eq: true }, 
                  quite: { ne: true },
                  date: { lt: ${buildTimestampUTC} } 
                } 
              }
            ) {
              edges {
                node {
                  id
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    url
                    templateKey
                    date
                    tags
                    featuredimage {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        `,
        serializeFeed: results => results.data.allMarkdownRemark.edges.map(({ node }) => ({
          url: node.frontmatter.url,
          title: node.frontmatter.title,
          featuredimage: node.frontmatter.featuredimage.publicURL,
          date: new Date(node.frontmatter.date).toISOString(),
          tags: node.frontmatter.tags,
        })),
        nodesPerFeedFile: 25,
      }
    }
  ],
}
