import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <div>
    {useEffect(() => {
      let timeout = setTimeout(() => {
        navigate('/')
      }, 5000)
    })}
    <Layout>
      <SEO
        title="Success"
        keywords={[`form`, `confirmation`, `react`, `gatsby`]}
      />
      <div style={{ textAlign: 'center' }}>
        <h2>
          Thanks for reaching out! I'll get back to you as soon as possible.
        </h2>
        <p>Navigating back to home page...</p>
      </div>
    </Layout>
  </div>
)
