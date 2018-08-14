import React, { Component } from 'react';

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
        <form>
          <p>Name</p>
          <input name="name" onChange={this.handleInput} placeholder="Name" />
          <p>Email</p>
          <input name="email" onChange={this.handleInput} placeholder="Email" />
          <p>Phone</p>
          <input name="phone" onChange={this.handleInput} placeholder="Phone" />
          <p>Message</p>
          <input
            name="message"
            onChange={this.handleInput}
            placeholder="Message"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
