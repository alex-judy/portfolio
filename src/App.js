import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './styles/app.css';
import Projects from './components/projects';
import NavBar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';

class App extends Component {
  state = {};

  // componentDidMount() {
  //   alert("Site is currently under construction. Please check back later!");
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
