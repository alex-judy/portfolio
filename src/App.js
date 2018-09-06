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
        imageUri: "discord.svg"
      },
      {
        id: 2,
        title: "Twitter Bot",
        description: "Twitter Bot Description",
        imageUri: ""
      },
      {
        id: 3,
        title: "Expense Tracker",
        description: "Expense Tracker Description",
        imageUri: ""
      },
      {
        id: 4,
        title: "MFA Application",
        description: "MFA Application Description",
        imageUri: ""
      },
      {
        id: 5,
        title: "Connect Win Tracker",
        description: "Connect Win Tracker Description",
        imageUri: ""
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
