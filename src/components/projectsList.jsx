import React from 'react'
import styled from 'styled-components'
import marked from 'marked'
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
        & > div {
          width: 300px;
          height: ${repository.image1.text === '' ? 20 : 300};
        }
      `

      const Project = styled.div`
        padding-bottom: 5rem;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 10px 10px #666;
        margin: 1rem 0 1rem 0;
        borderradius: 10px;
        backgroundcolor: whitesmoke;
        @media only screen and (max-width: 1005px) {
          box-shadow: none;
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
        <Project key={repository.url}>
          <ImageContainer>
            <div
              style={{
                padding: '5%',
                maxWidth: `33%`,
                maxHeight: '100%',
                minWidth: '15%',
              }}
              dangerouslySetInnerHTML={{ __html: repository.image1.text }}
            />
            <div
              style={{
                padding: '5%',
                maxWidth: `33%`,
                maxHeight: '100%',
                minWidth: '15%',
              }}
              dangerouslySetInnerHTML={{ __html: repository.image2.text }}
            />
            <div
              style={{
                padding: '5%',
                maxWidth: `33%`,
                maxHeight: '100%',
                minWidth: '15%',
              }}
              dangerouslySetInnerHTML={{ __html: repository.image3.text }}
            />
          </ImageContainer>
          <div style={{ width: '100%', padding: '10px' }}>
            <h3 style={{ textAlign: 'center' }}>{repository.name}</h3>
            <a
              href={repository.url}
              style={{ borderBottom: '1px solid black', textAlign: 'center' }}
            >
              Visit Project
            </a>
            <div
              style={{ marginTop: 10 }}
              dangerouslySetInnerHTML={{
                __html: marked(repository.readme.text, { sanitize: true }),
              }}
            />
          </div>
        </Project>
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
        // TODO: Cache results in either local or session storage in order to grab data if github api is not available.
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
