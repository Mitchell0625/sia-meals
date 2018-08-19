import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="contact">
        <h2>Get in touch</h2>
        <form className="contact__form">
          <div className="contact__small">
            <p>Name</p>
            <input
              name="name"
              type="text"
              onChange={this.handleInput}
              placeholder="Name"
            />
            <p>Email</p>
            <input
              name="email"
              type="email"
              onChange={this.handleInput}
              placeholder="Email"
            />
            <p>Phone</p>
            <input
              name="phone"
              onChange={this.handleInput}
              placeholder="Phone"
            />
          </div>
          <div className="contact__message">
            <p>Message</p>
            <input
              name="message"
              type="text"
              onChange={this.handleInput}
              placeholder="Message"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
