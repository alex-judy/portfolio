import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './styles/app.css';
import Projects from './components/projects';
import NavBar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';

class App extends Component {
  state = {
    // TODO: Placeholder for projects. Will be moved to a DB table.
    projects: [
      {
        id: 1,
        title: 'Discord Bot',
        description:
          'Nullam laoreet neque et ante cursus, eu porttitor sapien accumsan. Sed sodales eros sit amet tellus consequat maximus. Ut id cursus tortor. Nulla facilisi. Ut vel ex ut elit facilisis sollicitudin quis a purus.',
        technologies: ['Python'],
        imageSrc: 'discord_dark.svg',
        imageStyles: {}
      },
      {
        id: 2,
        title: 'Twitter Bot',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta eget ex faucibus volutpat. Pellentesque pellentesque purus velit, non pretium arcu maximus id.',
        technologies: ['Java', 'MySQL'],
        imageSrc: 'twitter.svg',
        imageStyles: {}
      },
      {
        id: 3,
        title: 'Expense Tracker',
        description:
          'Sed mauris urna, viverra id bibendum eu, sodales et est. Curabitur augue nunc, dictum id imperdiet sed, finibus nec purus. Etiam fermentum metus ex, id hendrerit tellus interdum nec.',
        technologies: ['C#', '.NET', 'Blazor'],
        imageSrc: 'testFail.png',
        imageStyles: {}
      },
      {
        id: 4,
        title: 'MFA Application',
        description:
          'Duis eget tellus faucibus, auctor dui posuere, volutpat arcu. Curabitur suscipit tristique leo, ut gravida lacus rhoncus sed. Praesent lectus nisi, placerat in porta sit amet, auctor eget nibh.',
        technologies: ['React', 'Node', 'Mongo'],
        imageSrc: 'testFail.png',
        imageStyles: {}
      },
      {
        id: 5,
        title: 'Connect Win Tracker Description',
        description:
          'Vestibulum mattis metus a sapien vehicula ullamcorper eget a metus. Pellentesque ut bibendum libero. Nullam lacinia leo mauris. Fusce laoreet augue et ipsum pharetra gravida id ut lacus.',
        technologies: [],
        imageSrc: 'testFail.png',
        imageStyles: {}
      }
    ]
  };

  // componentDidMount() {
  //   alert("Site is currently under construction. Please check back later!");
  // }

  render() {
    const { projects } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" render={() => <Projects projects={projects} />} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
