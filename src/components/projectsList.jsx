import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ProjectCard from '../components/projectCard'

function ProjectsList() {
  function displayProjects(repositories) {
    return repositories.map(repository => {
      if (!repository.readme) {
        repository.readme = {
          id: '',
          text: 'README does not exist in this repository yet',
        }
      }
      if (!repository.image1) {
        repository.image1 = {
          id: '',
          text: '',
          alt: 'Image does not exist in this repository yet.',
        }
      }
      if (!repository.image2) {
        repository.image2 = {
          id: '',
          text: '',
        }
      }
      if (!repository.image3) {
        repository.image3 = {
          id: '',
          text: '',
        }
      }
      return (
        <div
          key={repository.url}
          style={{
            paddingBottom: '5rem',
            width: '100%',
            // display: 'flex',
            // flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
              alignItems: 'center',
            }}
          >
            <span
              dangerouslySetInnerHTML={{ __html: repository.image1.text }}
            />
            <span
              dangerouslySetInnerHTML={{ __html: repository.image2.text }}
            />
            <span
              dangerouslySetInnerHTML={{ __html: repository.image3.text }}
            />
          </div>
          <p style={{ justifyContent: 'center' }}>{repository.name}</p>
          <p>{repository.readme.text}</p>
          <a href={repository.url}>Visit Project</a>
        </div>
        // <ProjectCard
        //   images={[
        //     repository.image1.text,
        //     repository.image2.text,
        //     repository.image3.text,
        //   ]}
        //   name={repository.readme.text}
        //   description={repository.url}
        // />
      )
    })
  }
  return (
    <StaticQuery
      // TODO: Change Github repository icons and rename. Handle null if icon doesnt exist.
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
                  image1: object(expression: "master:icon1.svg") {
                    id
                    ... on GitHub_Blob {
                      text
                      oid
                    }
                  }
                  image2: object(expression: "master:icon2.svg") {
                    id
                    ... on GitHub_Blob {
                      text
                      oid
                    }
                  }
                  image3: object(expression: "master:icon3.svg") {
                    id
                    ... on GitHub_Blob {
                      text
                      oid
                    }
                  }
                  readme: object(expression: "master:README.md") {
                    id
                    ... on GitHub_Blob {
                      text
                      oid
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
