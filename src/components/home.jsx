import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import FontAwesome from 'react-fontawesome';

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
          Content Here
          <a href="https://github.com/alex-judy">
            <FontAwesome
              className="super-crazy-colors"
              name="rocket"
              size="2x"
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
