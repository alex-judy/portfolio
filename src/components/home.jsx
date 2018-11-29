import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="Home">
        <p>HOME PAGE</p>
        <Gravatar email="alex.rjudy@gmail.com" size={100} />
      </div>
    );
  }
}

export default Home;
