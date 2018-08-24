import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    // Placeholder for projects. Will be moved to a DB table.
    projects: [
      { id: 1, name: "", description: "" },
      { id: 2, name: "", description: "" },
      { id: 3, name: "", description: "" },
      { id: 4, name: "", description: "" },
      { id: 5, name: "", description: "" }
    ]
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="jumbotron">
          <h1> Site under construction please check back later! </h1>
        </div>
      </div>
    );
  }
}

export default App;
