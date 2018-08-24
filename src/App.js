import React, { Component } from "react";
import "./App.css";
import Projects from "./Components/projects";
import NavBar from "./Components/navbar";

class App extends Component {
  state = {
    // Placeholder for projects. Will be moved to a DB table.
    projects: [
      { id: 1, title: "Discord Bot", description: "Discord Bot Description" },
      { id: 2, title: "Twitter Bot", description: "Twitter Bot Description" },
      { id: 3, title: "Expense Tracker", description: "Expense Tracker Description" },
      { id: 4, title: "MFA Application", description: "MFA Application Description" },
      { id: 5, title: "Connect Win Tracker", description: "Connect Win Tracker Description" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <NavBar />
          <div className="container">
            <Projects projects={this.state.projects} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
