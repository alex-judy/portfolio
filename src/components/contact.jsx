import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      lastName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    const { email, firstName, lastName } = this.state;

    // Debugging
    alert(
      `A name was submitted:
        First Name: ${firstName}
        Last Name: ${lastName}
       
       With an email at: ${email}`
    );
    e.preventDefault();
  };

  handleChange = e => {
    if (e.target.name === 'email') {
      this.setState({ email: e.target.value });
    } else if (e.target.name === 'firstName') {
      this.setState({ firstName: e.target.value });
    } else if (e.target.name === 'lastName') {
      this.setState({ lastName: e.target.value });
    }
  };

  render() {
    return (
      <div className="Contact">
        <Form onSubmit={this.handleSubmit()}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="contactEmail">Email</Label>
                <Input
                  name="email"
                  id="contactEmail"
                  type="email"
                  placeholder="example@mail.com"
                  onChange={this.handleChange()}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstNameInput">First Name</Label>
                <Input
                  name="firstName"
                  id="firstNameInput"
                  type="text"
                  placeholder=""
                  onChange={this.handleChange()}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastNameInput">Last Name</Label>
                <Input
                  name="lastName"
                  id="lastNameInput"
                  type="text"
                  placeholder=""
                  onChange={this.handleChange()}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
