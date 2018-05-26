const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.modifyWebpackConfig = function({ config, stage }) {
  if (stage === 'build-html') {} 

  return config
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const postsFrom = '/src/posts'
    const postsRouteTo = '/'

    const value = createFilePath({
      node,
      getNode,
      basePath: path.join(__dirname, postsFrom),
    }).toLowerCase()

    createNodeField({
      name: `slug`,
      node,
      value: path.join(postsRouteTo, value).slice(0, value.indexOf('readme')),
    })
  }
}
