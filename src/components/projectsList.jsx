import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Image from '../components/image'

function ProjectsList() {
  function displayProjects(repositories) {
    return repositories.map(repository => {
      if (!repository.readme) {
        repository.readme = {
          id: '',
          text: 'README does not exist in this repository yet',
        }
      }
      if (!repository.image) {
        repository.image = {
          id: '',
          text: '',
          alt: 'Image does not exist in this repository yet.',
        }
      }

      return (
        <div
          key={repository.url}
          style={{ paddingBottom: '5rem', width: '100%' }}
        >
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
              alignItems: 'center',
            }}
          >
            <span dangerouslySetInnerHTML={{__html: repository.image.text}} />
            <Image src={repository.image.text} alt={repository.image.alt} />
          </div>
          <p style={{ justifyContent: 'center' }}>{repository.name}</p>
          <p>{repository.readme.text}</p>
          <a href={repository.url}>{repository.url}</a>
        </div>
      )
    })
  }
  return (
    <StaticQuery
      query={graphql`
        query GithubRepoQuery {
          github {
            viewer {
              login
              repositories(
                privacy: PUBLIC
                affiliations: OWNER
                isFork: false
                first: 100
              ) {
                nodes {
                  name
                  url
                  image: object(expression: "master:icon.svg") {
                    id
                    ... on GitHub_Blob {
                      text
                    }
                  }
                  readme: object(expression: "master:README.md") {
                    id
                    ... on GitHub_Blob {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        // Catching errors since I am hitting an external GraphQl API
        try {
          return (
            <div
              style={{
                display: 'flex',
                flexFlow: 'column wrap',
              }}
            >
              {displayProjects(data.github.viewer.repositories.nodes)}
            </div>
          )
        } catch {
          return (
            <div style={{ fontWeight: 'bold', color: 'red' }}>
              The Github GraphQl API could not be reached at this time. Please
              check back later.
            </div>
          )
        }
      }}
    />
  )
}

export default ProjectsList
