import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './styles/app.css';
import Projects from './components/projects';
import NavBar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  state = {};

  // componentDidMount() {
  //   alert(process.env.REACT_APP_USER);
  // }

  componentWillMount() {
    fetch('https://api.github.com/repos/octokit/octokit.rb/contents/README.md', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        const readme = new File([res.content], 'README.md', {
          type: 'md',
          lastModified: Date.now()
        });
        console.log(readme);
      })
      .catch(e => console.log(e));
  }

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
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
