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
        <div height="100%">
          <a href={data.allFile.edges[0].node.publicURL} download="Resume.pdf">
            Download
          </a>
          <iframe
            src={data.allFile.edges[0].node.publicURL}
            width="100%"
            title="resume-iframe"
            frameBorder="0"
            overflow="auto"
          />
        </div>
      )}
    />
  )
}

export default ResumeViewer
