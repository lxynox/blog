import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import {TypographyStyle, GoogleFont} from 'react-typography'
import {List} from 'react-content-loader'

import typography, {rhythm} from '../utils/typography'

class IndexPage extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)'
      }}>
        <List/>
        <Link to='/blog'>blog | </Link>
        <Link to='/home'>home | </Link>
        <Link to='/about'>about |</Link>
        <Link to='/me'>me | </Link>
      </div>
    )
  }
}

export default IndexPage

