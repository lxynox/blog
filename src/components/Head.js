import React from 'react'
import Helmet from 'react-helmet'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography, { rhythm } from '../utils/typography'

export default function Head({ title }) {
	return (
		<Helmet>
			<title>{title}</title>
			<TypographyStyle typography={typography} />
			<GoogleFont typography={typography} />
		</Helmet>
	)
}