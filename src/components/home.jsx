import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../styles/home.css';

class Home extends Component {
  state = {};

  render() {
    return (
      <div id="Home">
        <Row className="top-buffer">
          <Col>
            <h3>Alex Judy</h3>
          </Col>
        </Row>
        <Row className="top-buffer">
          <Col>
            <Gravatar id="gravatar" email="alex.rjudy@gmail.com" size={200} />
          </Col>
        </Row>
        <Row className="top-buffer">
          <Col md={{ size: 6, offset: 3 }}>
            <article id="homeArticle">
              <h4>Hi, I’m Alex. Thanks for stopping by!</h4>
              <p>
                I am currently working for HMB as a software consultant. At this time, I am at
                Mercer as a Security expert. I develop solutions in my spare time to help automate
                daily tasks and fill in gaps that I find in applications.
              </p>
            </article>
          </Col>
        </Row>
        <Row className="top-buffer">
          <Col md={{ size: 1, offset: 3 }}>
            <a className="social" href="https://github.com/alex-judy">
              <FontAwesomeIcon icon={faGithub} size="8x" />
            </a>
          </Col>
          <Col md={{ size: 1, offset: 1 }}>
            <a className="social" href="https://gitlab.com/alex-judy">
              <FontAwesomeIcon icon={faGitlab} size="8x" />
            </a>
          </Col>
          <Col md={{ size: 1, offset: 1 }}>
            <a className="social" href="https://www.linkedin.com/in/alex-judy">
              <FontAwesomeIcon icon={faLinkedin} size="8x" />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
