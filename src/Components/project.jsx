import React from "react";
import PropTypes from "prop-types";
import "../styles/project.css";
import Image from "./image";

const Project = props => {
  const { project } = props;
  return (
    <div className="Project col-md-4">
      <Image imageSrc={project.imageSrc} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
};

Project.propTypes = {
  imageUri: PropTypes.string
};

export default Project;
