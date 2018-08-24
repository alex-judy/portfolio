import React from "react";

const Project = props => {
  const { title, description, project } = props;

  //state = {};

  return (
    <div className="col-md-4">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Project;
