import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Trianglify from 'trianglify'
import styled from 'styled-components'
import Card from '../components/Card'
import Head from '../components/Head'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (max-width: 48rem) {
    flex-flow: column;
  }
`

const Background = styled.div`
  background: url(${props => props.png}) no-repeat;
`

const StyledCard = styled(Card)``

const PostItem = styled.div`
  margin-top: 5rem;
  max-width: 40rem;
  @media (max-width: 48rem) {
    margin-top: 2rem;
  }
`

class BlogPage extends React.Component {
  render() {
    return (
      <Container>
        <Head />
        {this.renderPosts()}
      </Container>
    )
  }

  renderPosts() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const pngs = get(this, 'props.data.allImageSharp.edges')
    return posts.map(({ node }, index) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      const imgSrc = get(node, 'frontmatter.cover.childImageSharp.sizes')
      const png = get(pngs[index], 'node.sizes.src')
      // TODO: Dynamically create png data uri
      // http://qrohlf.com/trianglify/
      // const png = Trianglify({ width: 1024, height: 200 }).png()
      return (
        <PostItem key={node.fields.slug}>
          <StyledCard>
            <Background png={png}>
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
                <p style={{ fontWeight: 600, paddingTop: '1rem' }}>
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
            </Background>
          </StyledCard>
        </PostItem>
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
    allImageSharp(filter: { id: { regex: "/trianglify.png/" }}) {
      edges {
        node {
          sizes(maxWidth: 800, maxHeight: 200) {
            ...GatsbyImageSharpSizes
          }
        }
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
