import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ id, images, name, description, url }) => {
  const ImageContainer = styled.div`
    margin-bottom: 1.45rem;
    display: flex;
    justify-content: space-evenly;
    & > div {
      width: 300px;
      height: 300px;
    }
  `
  return (
    <div
      key={id}
      style={{
        paddingBottom: '5rem',
        width: '100%',
      }}
    >
      <ImageContainer>
        {images.forEach(image => {
          console.log(image.text)
          return (
            <div
              style={{
                maxWidth: `300px`,
              }}
              dangerouslySetInnerHTML={{ __html: image.text }}
            />
          )
        })}
      </ImageContainer>
      <p style={{ justifyContent: 'center' }}>{name}</p>
      <p>{description}</p>
      <a href={url}>Visit Project</a>
    </div>
  )
}

export default ProjectCard
