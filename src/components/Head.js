import React from 'react'
import Helmet from 'react-helmet'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

export default function Head({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/1.1.0/trianglify.min.js"></script>
    </Helmet>
  )
}
