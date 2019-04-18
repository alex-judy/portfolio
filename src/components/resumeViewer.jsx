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
        <div>
          <a
            href={data.allFile.edges[0].node.publicURL}
            download="Resume.pdf"
            style={{ color: 'white' }}
          >
            <div>Resume</div>
          </a>
        </div>
      )}
    />
  )
}

export default ResumeViewer
