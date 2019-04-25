import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Menu from './menu'

const Header = ({ siteTitle }) => (
  <div
    id="NavBar"
    style={{
      backgroundColor: `#495159`,
      marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'flex-start',
      position: 'fixed',
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `whitesmoke`,
            textDecoration: `none`,
          }}
        >
          {`< ${siteTitle} />`}
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
