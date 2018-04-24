import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/images/profile.jpg'
import { rhythm } from '../utils/typography'

const Bio = () => ( 
  <div
    style={{
      display: 'flex',
        marginBottom: rhythm(2.5),
    }}
  >
    <img
      src={profilePic}
      alt='Fat panda'
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: '100%'
      }}
    />
    <p>Hey this is Allen!</p>
  </div>
)

export default Bio


