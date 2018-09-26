import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: "loading",
      hasError: false,
      imageSrc: this.props.imageSrc
    };
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
      console.log(this.state.imageSrc);
      return require(`../assets/${this.state.imageSrc}`);
    } catch (e) {
      console.log(e);
      return require(`../assets/${defaultImgSrc}`);
    }
  }

  render() {
    const style = {
      backgroundColor: "gray",
      width: "100%"
    };

    return (
      <img
        className="Image"
        alt="Logo"
        src={this.loadImage()}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        style={style}
        height="100"
      />
    );
  }
}

Image.propTypes = {
  imageUri: PropTypes.string
};

export default Image;
