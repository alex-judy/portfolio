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

  componentWillMount() {
    fetch('https://api.github.com/repos/octokit/octokit.rb/contents/README.md', { mode: 'no-cors' })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log(e));

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Louisville,us&appid=6be7cf34a1db95dddede7685e93ddbb6
    `)
      .then(res => res.json())
      .then(res => console.log(res.main.temp));
  }

  // 6be7cf34a1db95dddede7685e93ddbb6

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
