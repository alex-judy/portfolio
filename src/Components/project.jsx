import React from "react";
import "../styles/project.css";
import Image from "./image";

const Project = props => {
  const { project } = props;
  return (
    <div className="col-md-4">
      <Image imageUri={project.imageUri} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
