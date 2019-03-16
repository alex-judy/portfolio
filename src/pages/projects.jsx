import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsList from '../components/projectsList'

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" keywords={[]} />
    <h1>Hi from the projects</h1>
    <p>Welcome to the projects page</p>
    <div>{data.github.viewer.login}</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
  query GithubRepoReadme {
    github {
      viewer {
        login
        repositories(
          privacy: PUBLIC
          affiliations: OWNER
          isFork: false
          first: 100
        ) {
          nodes {
            name
            url
            object(expression: "master:README.md") {
              id
              ... on GitHub_Blob {
                text
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
