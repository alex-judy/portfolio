import React from "react";
import Project from "./project";
import "../styles/projects.css";

const Projects = props => {
  const { projects } = props;
  return (
    <div className="Projects row">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
