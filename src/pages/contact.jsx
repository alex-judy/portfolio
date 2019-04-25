import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FormGroup = styled.div`
  margin: 10px;
`

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
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '5%',
        maxWidth: '100%',
        textAlign: 'left',
      }}
    >
      <FormGroup>
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          style={{ width: '100%', margin: '1% 0 3% 0' }}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="firstName" style={{ fontWeight: 'bold' }}>
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          style={{ width: '100%', margin: '1% 0 3% 0' }}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="lastName" style={{ fontWeight: 'bold' }}>
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          style={{ width: '100%', margin: '1% 0 3% 0' }}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="message" style={{ fontWeight: 'bold' }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="..."
          style={{
            width: '100%',
            margin: '1% 0 3% 0',
            height: 100,
          }}
        />
      </FormGroup>

      <input
        type="submit"
        style={{
          marginTop: '5%',
          backgroundColor: '#495159',
          color: 'white',
          maxWidth: '100%',
        }}
      />
    </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default ContactPage
