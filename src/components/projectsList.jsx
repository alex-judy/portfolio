import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

// import ProjectCard from '../components/projectCard'

function ProjectsList() {
  function displayProjects(repositories) {
    return repositories.map(repository => {
      if (!repository.readme) {
        repository.readme = {
          id: '',
          text: 'README does not exist in this repository yet.',
        }
      }
      if (!repository.image1) {
        repository.image1 = {
          id: '',
          text: '',
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

      const ImageContainer = styled.div`
        max-width: 100%;
        margin-bottom: 1.45rem;
        display: flex;
        justify-content: space-evenly;
        & > div {
          width: 300px;
          height: ${repository.image1.text === '' ? 20 : 300};
        }
      `
      return (
        // TODO: Fix project card component to move logic out of this.
        // <ProjectCard
        //   id={repository.id}
        //   images={[repository.image1, repository.image2, repository.image3]}
        //   name={repository.name}
        //   description={repository.readme.text}
        //   url={repository.url}
        // />
        <div
          key={repository.url}
          style={{
            paddingBottom: '5rem',
            width: '100%',
            boxSizing: 'initial',
          }}
        >
          <ImageContainer>
            <div
              style={{
                maxWidth: `33%`,
              }}
              dangerouslySetInnerHTML={{ __html: repository.image1.text }}
            />
            <div
              style={{
                maxWidth: `33%`,
              }}
              dangerouslySetInnerHTML={{ __html: repository.image2.text }}
            />
            <div
              style={{
                maxWidth: `33%`,
              }}
              dangerouslySetInnerHTML={{ __html: repository.image3.text }}
            />
          </ImageContainer>
          <h4 style={{ justifyContent: 'center' }}>{repository.name}</h4>
          <p>{repository.readme.text}</p>
          <a href={repository.url} style={{ borderBottom: '1px solid black' }}>
            Visit Project
          </a>
        </div>
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
                  id
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
        // Catching errors since I am getting data from an external GraphQl API
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
