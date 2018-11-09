import React, { Component } from "react";
import Project from "./project";
import { Row } from "reactstrap";
import "../styles/projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = this.props.projects;

    this.incrementRow = this.incrementRow.bind(this);
  }

  // TODO: Add new row for every 3rd element.
  incrementRow() {
    this.projects.map(project => {
      if (project.id % 2 === 1) {
        return (
          <Row>
            <Project key={project.id} project={project} />
          </Row>
        );
      } else {
        return <Project key={project.id} project={project} />;
      }
    });
  }

  render() {
    return (
      <div className="Projects">
        {this.projects.map(project => {
          if (project.id % 2 === 1) {
            return (
              <Row>
                <Project key={project.id} project={project} />
              </Row>
            );
          } else {
            return <Project key={project.id} project={project} />;
          }
        })}
      </div>
    );
  }
}

export default Projects;
