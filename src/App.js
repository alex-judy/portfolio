import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles/app.css";
import Projects from "./components/projects";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    // Placeholder for projects. Will be moved to a DB table.
    projects: [
      {
        id: 1,
        title: "Discord Bot",
        description: "Discord Bot Description",
        technologies: [],
        imageSrc: "discord.svg",
        imageStyles: {
          backgroundColor: "gray",
          width: "100%"
        }
      },
      {
        id: 2,
        title: "Twitter Bot",
        description: "Twitter Bot Description",
        technologies: [],
        imageSrc: "testFail.png",
        imageStyles: {}
      },
      {
        id: 3,
        title: "Expense Tracker",
        description: "Expense Tracker Description",
        technologies: [],
        imageSrc: "testFail.png",
        imageStyles: {}
      },
      {
        id: 4,
        title: "MFA Application",
        description: "MFA Application Description",
        technologies: [],
        imageSrc: "testFail.png",
        imageStyles: {}
      },
      {
        id: 5,
        title: "Connect Win Tracker",
        description: "Connect Win Tracker Description",
        technologies: [],
        imageSrc: "testFail.png",
        imageStyles: {}
      }
    ]
  };

  handleAlert = () => {
    console.log("Click");
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <NavBar onAlert={this.handleAlert} />
          <div className="container">
            <Projects projects={this.state.projects} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
