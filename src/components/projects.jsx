import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';

import '../styles/projects.css';
import Project from './project';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          title: 'Jarvis',
          description:
            'Jarvis is a discord server management bot built in Python. It’s meant to fill in the administration holes of Discord.',
          technologies: ['Python'],
          imageSrc: 'discord_dark.svg',
          imageStyles: {},
          repoLink: 'https://github.com/alex-judy/jarvis-bot'
        },
        {
          title: 'Metro Louisville Bot',
          description:
            'The Metro Louisville Twitter Bot was built to allow users to easily query Louisville city records. Using Twitter as a UI, users can send a tweet @ the bot and get an API response.',
          technologies: ['Java', 'MySQL'],
          imageSrc: 'twitter.svg',
          imageStyles: {},
          repoLink: 'https://github.com/alex-judy/twitter-bot'
        },
        {
          title: 'MERN Site Tracker',
          description:
            'This application tracks the status of my hosted applications. I also added user authentication with JWT / Passport for security.',
          technologies: ['React', 'Node', 'Mongo', 'JWT', 'Passport'],
          imageSrc: 'mern.svg',
          imageStyles: {},
          repoLink: 'https://github.com/alex-judy/site-tracker.git'
        },
        {
          title: 'Blazor Win Tracker',
          description: 'Using Blazor I developed a Win Tracker for our sports teams at HMB.',
          technologies: ['C#', '.NET Core', 'Blazor'],
          imageSrc: 'blazor.svg',
          imageStyles: { 'background-color': 'darkgray' },
          repoLink: 'https://github.com/alex-judy/connect-win-tracker'
        }
      ]
    };
  }

  splitProjects = () => {
    const chunks = [];
    const chunkSize = 4;
    const { projects } = this.state;

    while (projects.length > 0) {
      chunks.push(projects.splice(0, chunkSize));
    }
    return chunks;
  };

  generateKey = () => `${Math.floor(Math.random() * 100)}_${new Date().getTime()}`;

  // TODO: Finish implementing. Needs to return full component.
  incrementRow() {
    const chunks = this.splitProjects();
    return chunks.map(chunk => (
      <CardDeck key={this.generateKey()}>
        {chunk.map(project => (
          <Project key={this.generateKey()} project={project} />
        ))}
      </CardDeck>
    ));
  }

  render() {
    return (
      <div id="Projects">
        <h4 id="projectsTitle">Click a card to access the relevant repository!</h4>
        {this.incrementRow()}
      </div>
    );
  }
}

export default Projects;
