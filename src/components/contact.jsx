import React, { useState } from 'react';

// import '../styles/contact.css';
import Layout from './layout';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactPage = () => (
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     firstName: '',
  //     lastName: '',
  //     message: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.sendMail = this.sendMail.bind(this);
  // }
  // const [email, firstName, lastName, message] = useState('')

  // sendMail() {
  //   fetch('/', {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'contact', ...this.state })
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.sendMail();
  // }

    // const { firstName, lastName, email, message } = this.state;
    <Layout>
<div id="Contact">
        {/* <Form
          // onSubmit={this.handleSubmit}
          name="contact"
          data-netlify="true"
          // netlify-honeypot="bot-form"
          method="POST"
        >
          <input type="hidden" name="subject" value="Portfolio Contact Submission" />
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
                  value={email}
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
                  value={firstName}
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
                  value={lastName}
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
              value={message}
            />
          </FormGroup>
          <Button type="submit">Send</Button>
        </Form> */}
      </div>
    </Layout>
      
  )

export default ContactPage;
