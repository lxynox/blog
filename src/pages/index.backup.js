import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right; #ada996; #f2f2f2; #dbdbdb; #eaeaea);
`

class IndexPage extends React.Component {
  render() {
    return (
      <Container>
        <Link to="/blog">blog | </Link>
        <Link to="/home">home | </Link>
        <Link to="/about">about |</Link>
        <Link to="/me">me | </Link>
      </Container>
    )
  }
}

export default IndexPage
