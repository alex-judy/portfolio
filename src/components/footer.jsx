import React from 'react'

const Footer = () => (
  <h6
    style={{
      position: 'relative',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      marginTop: 15,
      opacity: 0.5,
      height: '95%',
    }}
  >
    Built by Alex Judy using Gatsby and React &copy;{new Date().getFullYear()}
  </h6>
)

export default Footer
