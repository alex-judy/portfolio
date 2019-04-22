import React from 'react'

const ProjectCard = ({ images, name, description, url }) => {
  return (
    <div
      key={url}
      style={{
        paddingBottom: '5rem',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          alignItems: 'center',
        }}
      >
        {images.forEach(image => {
          return <span dangerouslySetInnerHTML={{ __html: image }} />
        })}
      </div>
      <p style={{ justifyContent: 'center' }}>{name}</p>
      <p>{description}</p>
      <a href={url}>Visit Project</a>
    </div>
  )
}

export default ProjectCard
