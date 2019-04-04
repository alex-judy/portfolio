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
            <div>Resume</div>
          </a>
          {/* <iframe
            src={data.allFile.edges[0].node.publicURL}
            style={{
              height: '2200rem',
              width: '100%',
              title: 'resume-iframe',
              frameBorder: '0',
              overflow: 'auto',
            }}
            title="resume-iframe"
          /> */}
        </div>
      )}
    />
  )
}

export default ResumeViewer
