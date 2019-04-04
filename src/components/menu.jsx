import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

function Menu() {
  let [collapsed, setCollapsed] = useState(false)

  function onNavClick() {
    setCollapsed((collapsed = !collapsed))
  }

  return (
    <div
      id="NavBar"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <button
        style={{
          background: 'none',
          border: 'none',
          outline: 'none',
          position: 'absolute',
        }}
        onClick={() => onNavClick()}
      >
        <span>
          <FaBars />
        </span>
      </button>
      <div
        style={{
          display: !collapsed ? 'none' : '',
          position: 'absolute',
        }}
      >
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            background: 'darkgray',
            fontWeight: 'bold',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
