import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

function Layout({ children }) {
  const SocialGroup = styled.div`
    position: fixed;
    top: 50%;
    float: left;
    margin: 30px;

    @media only screen and (max-width: 1520px) {
      display: flex;
      position: relative;
      top: initial;
      float: initial;
      bottom: 0;
      max-width: 960px;
      width: 100%;
      align-items: evenly-spaced;
      padding: 50px;
      justify-content: center;
      margin: 0px auto;
      &:first-child > div {
        margin-right: auto;
      }

      &:last-child > div {
        margin-left: auto;
      }
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
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: ``,
              paddingTop: 20,
            }}
          >
            {children}
          </div>
          <SocialGroup>
            <SocialIcon>
              <a
                href="https://github.com/alex-judy"
                aria-label="Github Profile"
              >
                <FaGithub size={60} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://gitlab.com/alex-judy"
                aria-label="Gitlab Profile"
              >
                <FaGitlab size={60} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.linkedin.com/in/alex-judy"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={60} />
              </a>
            </SocialIcon>
          </SocialGroup>
          <Footer />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
