import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

import '../styles/project.css';

const errorImage = require('../assets/coding.svg');

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  appendTechnologies = technologies => {
    let appended = '';
    technologies.forEach((technology, index) => {
      if (index === 0) appended += technology;
      else appended += `, ${technology}`;
    });
    return appended;
  };

  loadImage = imageSrc => {
    try {
      // Dynamic image load
      return require(`../assets/${imageSrc}`);
    } catch (e) {
      console.log(e);
      return errorImage;
    }
  };

  render() {
    const { project } = this.props;
    const { title, imageStyles, description, technologies, imageSrc, repoLink } = project;
    return (
      <Card id="Project" height="100%">
        <a href={repoLink}>
          <CardImg src={this.loadImage(imageSrc)} style={imageStyles} width="100" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{this.appendTechnologies(technologies)}</CardSubtitle>
            <CardText>{description}</CardText>
          </CardBody>
        </a>
      </Card>
    );
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(String),
    imageSrc: PropTypes.string,
    imageStyles: PropTypes.objectOf(String),
    repoLink: PropTypes.string
  }).isRequired
};

export default Project;
