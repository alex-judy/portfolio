import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

function ResumeViewer() {
  return (
    <StaticQuery
      query={graphql`
        query ResumeQuery {
          allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `}
      render={data => (
        <a
          href={data.allFile.edges[0].node.publicURL}
          download="Resume.pdf"
          style={{ marginRight: 5 }}
        >
          Resume
        </a>
      )}
    />
  )
}

export default ResumeViewer
