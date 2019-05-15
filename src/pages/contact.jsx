import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FormGroup = styled.div`
  margin: 10px;
`

export default () => (
  <Layout>
    <SEO title="Contact" keywords={[`form`, `contact`, `react`, `gatsby`]} />
    <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
    <h4 style={{ textAlign: 'center' }}>
      Feel free to reach out to me and I'll try to get back to you as soon as
      possible!
    </h4>
    <form
      name="Contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '5%',
        maxWidth: '100%',
        textAlign: 'left',
        padding: '0 20% 0 20%',
      }}
    >
      <input type="hidden" name="form-name" value="Contact" />
      <div hidden>
        <input id="bot-field" name="bot-field" />
      </div>
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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <input
          type="submit"
          value="Send"
          style={{
            margin: '5% 30% 0 30%',
            backgroundColor: 'black',
            color: 'white',
            maxWidth: '100%',
            borderRadius: 30,
            border: 'none',
            outline: 0,
            width: '7em',
          }}
        />
      </div>
    </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)
