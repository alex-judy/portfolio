import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" keywords={[]} />
    <h1>Resume</h1>
    <p>Feel free to look over my resume here or download a copy for yourself!</p>
    <a href="/assets/Resume.pdf" download="Resume.pdf">Download</a>  </Layout>
)

export default ResumePage
