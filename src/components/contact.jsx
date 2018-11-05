import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState(
      { email: e.target[0].value, name: e.target[1].value },
      // Debugging
      () => {
        alert(
          "A name was submitted: " +
            this.state.name +
            "\nWith an email at: " +
            this.state.email
        );
      }
    );
    e.preventDefault();
  }

  render() {
    return (
      <div className="Contact">
        <p>CONTACT PAGE</p>
        <form onSubmit={this.handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
