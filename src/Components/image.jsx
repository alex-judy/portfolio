import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    const style = {
      backgroundColor: "gray",
      width: "100%"
    };

    return (
      <img
        className="projectLogo"
        alt="logo"
        src="../assets/discord.svg"
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        style={style}
        width="100"
        height="100"
      />
    );
  }
}

export default Image;
