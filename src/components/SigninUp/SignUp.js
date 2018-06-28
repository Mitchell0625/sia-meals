import React, { Component } from "react";
import { auth } from "../../firebase/firebase";
import theSign, { Form } from "./Sign";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <Form
          signed={this.props.newUser}
          email={this.props.email}
          password={this.props.password}
        />
      </div>
    );
  }
}
export default theSign(SignUp);
