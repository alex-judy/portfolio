import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[]} />
    <h1>Hi from the projects</h1>
    <p>Welcome to the projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
