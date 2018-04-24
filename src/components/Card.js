import React from 'react'

const styles = {
  padding: '1rem',
  base: {
    background: 'linear-gradient(#cfd9df, #e2ebf0)',
    padding: '1rem 1rem 0 1rem',
    marginTop: '2rem',
    border: 'solid .1rem #ccc',
    borderRadius: '.125rem',
  },
  header: {
    textAlign: 'center'
  },
  footer: {
    padding: '2rem 1rem',
  }
}

function Element({tag, ...rest}) { 
  return React.createElement(tag, rest)
}

function CardTitle({tag = 'h3', children}) {
  return (
    <header style={styles.header}>
      <Element tag={tag}>{children}</Element>
    </header>
  )
}

function CardMedia({children}) {
  return <section>{children}</section>
}

function CardActions({children}) {
  return (
    <footer style={styles.footer}>{children}</footer>
  )
}

function Card({children}) {
  return (
    <article style={styles.base}>
      {children}
    </article>
  );
}

Card.Title = CardTitle
Card.Media = CardMedia
Card.Actions = CardActions

export default Card;
