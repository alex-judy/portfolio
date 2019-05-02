import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsList from '../components/projectsList'
import { defaultCipherList } from 'constants'

export default () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`projects`, `github`, `react`, `gatsby`]}
    />
    <h1>Projects</h1>
    <p>
      These are what projects I am currently working on or have worked on. All
      data is pulled from my public Github repositories, some of which may exist
      as idea placeholders. Thanks for checking them out!
    </p>
    <ProjectsList />
  </Layout>
)
