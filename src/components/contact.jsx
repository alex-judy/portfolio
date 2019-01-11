import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

import '../styles/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  // sendMail = (email, firstName, lastName, message) => {
  //   const url = 'https://api.mailgun.net/v3/alexjudy.com/messages';
  //   fetch('https://api.mailgun.net/v3/alexjudy.com/messages', {
  //     method: 'post',
  //     mode: 'no-cors',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       to: 'alex.rjudy@gmail.com',
  //       from: 'Test User <mailgun@alexjudy.com',
  //       subject: 'TEST MAIL'
  //     }),
  //     body: 'THIS IS A TEST'
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, firstName, lastName, message } = this.state;

    this.sendMail(email, firstName, lastName, message);
  }

  render() {
    return (
      <div id="Contact">
        <Form name="contact" data-netlify="true" netlify-honeypot="bot-form" method="POST">
          <input type="hidden" name="_subject" value="Portfolio Query" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-form" />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="contactEmail">Email</Label>
                <Input
                  name="email"
                  id="contactEmail"
                  type="email"
                  placeholder="example@mail.com"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="messageInput">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="messageInput"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
