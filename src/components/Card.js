import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  border: solid 1px var(--gray);
  border-radius: 0.125rem;
  background: var(--white);
`

const Section = styled.section`
  padding: 0 2rem;
`

const Header = styled.header`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Footer = styled.footer`
  padding: 1rem 2rem;
`

function CardTitle({ className, children }) {
  return <Header className={className}>{children}</Header>
}

function CardMedia({ className, children }) {
  return <Section className={className}>{children}</Section>
}

function CardActions({ className, children }) {
  return <Footer className={className}>{children}</Footer>
}

function Card({ className, children }) {
  return <Article className={className}>{children}</Article>
}

Card.Title = CardTitle
Card.Media = CardMedia
Card.Actions = CardActions

export default Card
