import React, { Component } from "react";
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

import "../styles/project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.project = this.props.project;
    this.state = {
      imageStatus: "loading",
      hasError: false,
      imageSrc: this.project.imageSrc,
      imageStyles: this.project.imageStyles
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({
      imageStatus: "failed to load",
      hasError: true,
      imageSrc: "../assets/coding.svg"
    });
  }

  loadImage() {
    const defaultImgSrc = "coding.svg";
    try {
      return require(`../assets/${this.state.imageSrc}`);
    } catch (e) {
      console.log(e);
      return require(`../assets/${defaultImgSrc}`);
    }
  }

  render() {
    return (
      <Col sm="6">
        <Card height="100%">
          <CardImg
            src={this.loadImage()}
            onLoad={this.handleImageLoaded}
            onError={this.handleImageErrored}
            style={this.state.imageStyles}
            width="100"
          />
          <CardBody>
            <CardTitle>{this.project.title}</CardTitle>
            <CardText>{this.project.description}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Project;
