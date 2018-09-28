import React from "react";
import "../styles/project.css";
import Image from "./image";

const Project = props => {
  const { project } = props;
  return (
    <div className="Project col-md-4">
      <Image imageSrc={project.imageSrc} imageStyles={project.imageStyles} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
