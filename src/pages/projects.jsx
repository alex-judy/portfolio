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
    <ProjectsList projectText={data} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
  query GithubRepoReadme {
    github {
      viewer {
        repository(owner: "alex-judy", name: "jarvis-bot") {
          object(expression: "master:README.md") {
            id
          }
        }
      }
    }
  }
`

export default Projects
