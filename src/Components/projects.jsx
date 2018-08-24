import React from "react";
import Project from "./project";
import "./projects.css";

const Projects = props => {
  const { projects } = props;

  return (
    <div className="Projects row">
      {projects.map(project => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
