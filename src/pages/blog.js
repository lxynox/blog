import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { List } from 'react-content-loader'
import Card from '../components/Card'
import Head from '../components/Head'

class BlogPage extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
        }}
      >
        <Head />
        {this.renderPosts()}
      </div>
    )
  }
  renderPosts() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      const imgSrc = get(node, 'frontmatter.cover.childImageSharp.sizes')
      return (
        <div
          style={{
            flex: '0 0 60%',
          }}
          key={node.fields.slug}
        >
          <Card>
            <Card.Title>
              <Link
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  textDecoration: 'none',
                }}
                to={node.fields.slug}
              >
                {title}
              </Link>
              <p style={{ paddingTop: '1rem' }}>
                <date>{node.frontmatter.date}</date>
              </p>
            </Card.Title>
            <Card.Media>
              <Img alt="cover image" sizes={imgSrc} />
            </Card.Media>
            <Card.Actions>
              <p
                style={{
                  fontFamily: "'Farsan'",
                  fontSize: '1.2em',
                }}
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </Card.Actions>
          </Card>
        </div>
      )
    })
  }
}

export default BlogPage

export const blogQuery = graphql`
  query blogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            cover {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
