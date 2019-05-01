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
      <h1 style={{ width: '100%', textAlign: 'center', fontSize: '2.5rem' }}>
        Thanks for stopping by!
      </h1>
      <Gravatar
        email="alex.rjudy@gmail.com"
        size={200}
        style={{ borderRadius: '50%' }}
      />
      <p style={{ fontSize: '2.5rem', lineHeight: 'initial' }}>
        I am a software engineer living in Louisville, KY. Currently employed
        with{' '}
        <a
          style={{ fontWeight: 'bold', color: '#62929e' }}
          href="https://hmbnet.com/"
        >
          HMB
        </a>
        {', '}a software consultancy firm.
      </p>
    </div>
  </Layout>
)

export default IndexPage
