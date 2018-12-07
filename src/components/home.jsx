import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../styles/home.css';

class Home extends Component {
  state = {};

  render() {
    return (
      <div id="Home">
        <h3 id="homeTitle">Alex Judy</h3>
        <Gravatar id="gravatar" email="alex.rjudy@gmail.com" size={200} />
        <article id="homeArticle">
          <h4>Hi, I’m Alex. Thanks for stopping by!</h4>
          <p>
            I am currently working for HMB as a software consultant. At this time I am at Mercer as
            a Security expert. I develop applications in my spare time to help automate daily tasks
            and fill in gaps that I find in applications.
          </p>
        </article>
        <div id="socials">
          <a className="social" href="https://github.com/alex-judy">
            <FontAwesomeIcon icon={faGithub} size="8x" />
          </a>
          <a className="social" href="https://gitlab.com/alex-judy">
            <FontAwesomeIcon icon={faGitlab} size="8x" />
          </a>
          <a className="social" href="https://www.linkedin.com/in/alex-judy">
            <FontAwesomeIcon icon={faLinkedin} size="8x" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
