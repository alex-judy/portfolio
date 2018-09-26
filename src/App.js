import React, { Component } from "react";
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
        imageSrc: "discord.svg"
      },
      {
        id: 2,
        title: "Twitter Bot",
        description: "Twitter Bot Description",
        technologies: [],
        imageSrc: "testFail.png"
      },
      {
        id: 3,
        title: "Expense Tracker",
        description: "Expense Tracker Description",
        technologies: [],
        imageSrc: "testFail.png"
      },
      {
        id: 4,
        title: "MFA Application",
        description: "MFA Application Description",
        technologies: [],
        imageSrc: "testFail.png"
      },
      {
        id: 5,
        title: "Connect Win Tracker",
        description: "Connect Win Tracker Description",
        technologies: [],
        imageSrc: "testFail.png"
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
