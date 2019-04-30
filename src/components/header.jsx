import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Menu from './menu'
import './header.css'

const Header = ({ siteTitle }) => (
  <div
    id="NavBar"
    style={{
      backgroundColor: `transparent`,
      marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'flex-start',
      width: '100%',
    }}
  >
    <Menu />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 class="typewriter" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#495159`,
            textDecoration: `none`,
          }}
        >
          {`> ${siteTitle}`}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
