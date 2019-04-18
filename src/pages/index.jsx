import React from 'react'
import Gravatar from 'react-gravatar'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`software`, `development`, `react`, `gatsby`]}
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <h1 style={{ width: '100%' }}>Hi, I’m Alex. Thanks for stopping by!</h1>
      <Gravatar
        email="alex.rjudy@gmail.com"
        size={200}
        style={{ borderRadius: '50%' }}
      />
      <p>
        I am currently working for HMB as a software consultant. At this time, I
        am at Mercer as a member of the Software Security Group. I develop
        solutions to common problems in my spare time to help automate daily
        tasks and fill in gaps that I find in applications.
      </p>
    </div>
  </Layout>
)

export default IndexPage
