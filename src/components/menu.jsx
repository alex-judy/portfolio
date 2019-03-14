import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <div id="NavBar" style={{
    background: '#f4f4f4',
    paddingTop: '10px'
  }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
    </ul>
  </div>
);

export default Menu;
