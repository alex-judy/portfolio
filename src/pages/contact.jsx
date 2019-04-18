import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`software`, `development`, `react`, `gatsby`]}
    />
    <h1>Contact Me</h1>
    <p>
      Feel free to reach out to me and I'll try to get back to you as soon as
      possible!
    </p>
    <form
      name="contact"
      netlify="true"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <label>
        Email: <input type="email" />
      </label>
      <label>
        FirstName: <input type="text" />
      </label>
      <label>
        LastName: <input type="text" />
      </label>
      <textarea name="message" />
      <input type="submit" />
    </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default ContactPage
