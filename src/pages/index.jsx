import React from 'react'
import Gravatar from 'react-gravatar'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Content = styled.p`
  font-size: 2rem;
  line-height: initial;
  margin-top: 2rem;

  @media only screen and (max-width: 355px) {
    font-size: 1.5rem;
  }
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  @media only screen and (max-width: 355px) {
    font-size: 1.75rem;
  }
`

const Interests = styled.table`
  text-align: left;
  width: 100%;
  margin-top: 2rem;
`

export default () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`software`, `development`, `portfolio`, `react`, `gatsby`]}
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
      <Title>Thanks for stopping by!</Title>
      <Gravatar
        email="alex.rjudy@gmail.com"
        size={200}
        style={{ borderRadius: '50%' }}
      />
      <Content>
        I am a software engineer living in Louisville, KY. Currently employed
        with{' '}
        <a
          style={{ fontWeight: 'bold', color: '#62929e' }}
          href="https://hmbnet.com/"
        >
          HMB
        </a>
        {', '}a software consultancy firm.
      </Content>
      {/* <Interests>
        <h3>Interests</h3>
        <tr>
          <th>Recreational</th>
        </tr>
        <tr>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
      </Interests> */}
    </div>
  </Layout>
)
