import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { navigate } from 'gatsby'

export default () => (
  <div>
    {useEffect(() => {
      let timeout = setTimeout(() => {
        navigate('/')
      }, 5000)
    })}
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <h2>
          Thanks for reaching out! I'll get back to you as soon as possible.
        </h2>
        <p>Navigating back to home page...</p>
      </div>
    </Layout>
  </div>
)
