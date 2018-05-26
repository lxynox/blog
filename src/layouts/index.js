import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import bgUrl from './bg.jpeg'
import 'prismjs/themes/prism.css';
import './styles.css'

injectGlobal`
  :root {
    --red: palevioletred;
    --green: darkseagreen;
    --gray: lavender;
    --white: #fdfaf6;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
`

const Container = styled.div`
  background: url(${bgUrl});
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (__PREFIX_PATHS__) rootPath = __PATH_PREFIX__ + `/`

    return (
      <Container>
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
