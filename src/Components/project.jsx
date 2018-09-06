import React from "react";
import "../styles/project.css";

const Project = props => {
  const { project, imageUri } = props;
  let image = "discord.svg";
  var style = {
    backgroundColor: "gray",
    width: "100%"
    // backgroundImage: `url(require(${image}))`
  };
  console.log(imageUri);
  return (
    <div className="col-md-4">
      <img
        className="projectLogo"
        alt="logo"
        src={require(`../assets/${imageUri}`)}
        style={style}
        width="100"
        height="100"
      />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
