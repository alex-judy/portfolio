import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

function Layout({ children }) {
  let [height, setHeight] = useState(0)

  useEffect(() => {
    let el = document.getElementById('NavBar')
    setHeight((height = el.offsetHeight))
  })

  const SocialGroup = styled.div`
    position: fixed;
    top: 50%;
    float: left;
    margin: 30px;
    @media only screen and (max-width: 1520px) {
      display: flex;
      top: initial;
      float: initial;
      bottom: 10px;
      border: 3px solid #8ac007;
      width: 100%;
      justify-content: space-between;
    }
  `

  const SocialIcon = styled.div`
    margin-top: 30px;
    &:hover > a:first-child {
      color: orange;
    }
    & > a:first-child {
      transition: color 0.2s;
      color: #495159;
    }
    &:hover > a:first-child {
      color: #62929e;
    }
  `

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <SocialGroup>
            <SocialIcon>
              <a href="https://github.com/alex-judy">
                <FaGithub size={75} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://gitlab.com/alex-judy?nav_source=navbar">
                <FaGitlab size={75} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://www.linkedin.com/in/alex-judy/">
                <FaLinkedin size={75} />
              </a>
            </SocialIcon>
          </SocialGroup>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: ``,
              paddingTop: height + 20,
            }}
          >
            {children}
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
