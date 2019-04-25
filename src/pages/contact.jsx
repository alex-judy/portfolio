import React from 'react'
// import styled from 'styled-components'

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
      <label>Email</label>
      <input id="email" name="email" type="email" />
      <label htmlFor="firstName">FirstName</label>
      <input id="firstName" name="firstName" type="text" />
      <label htmlFor="lastName">LastName</label>
      <input id="lastName" name="lastName" type="text" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <input type="submit" />
    </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default ContactPage
