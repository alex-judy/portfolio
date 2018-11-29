import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import Project from './project';
import '../styles/projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    const { projects } = props;
    this.projects = projects;
  }

  splitProjects = () => {
    const chunks = [];
    const chunkSize = 3;

    while (this.projects.length > 0) {
      chunks.push(this.projects.splice(0, chunkSize));
    }
    return chunks;
  };

  // TODO: Finish implementing. Needs to return full component.
  incrementRow() {
    const chunks = this.splitProjects();
    return chunks.map(chunk =>
      chunk.map(project => <Project key={project.id} project={project} />)
    );
  }

  render() {
    return (
      <div className="Projects">
        <CardDeck>{this.incrementRow()}</CardDeck>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(Object).isRequired
};

export default Projects;
