import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResumeViewer from '../components/resumeViewer'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`software`, `development`, `react`, `gatsby`]}
    />
    <h1>Hi, I’m Alex. Thanks for stopping by!</h1>
    <p>
      I am currently working for HMB as a software consultant. At this time, I
      am at Mercer as a member of the Software Security Group. I develop
      solutions to common problems in my spare time to help automate daily tasks
      and fill in gaps that I find in applications.
    </p>
    <ResumeViewer />
  </Layout>
)

export default IndexPage
