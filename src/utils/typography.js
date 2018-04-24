import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [{
    name: 'Press Start 2P',
    styles: []
  }, {
    name: 'Farsan',
    styles: []
  }, {
    name: 'Roboto',
    styles: ['500', '500i', '700', '700i']
  }]
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
