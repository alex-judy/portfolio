import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResumeViewer from '../components/resumeViewer'

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" keywords={[]} />
    <h1>Resume</h1>
    <p>
      Feel free to look over my resume here or download a copy for yourself!
    </p>
    <ResumeViewer />
  </Layout>
)

export default ResumePage
