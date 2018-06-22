import React, { Component } from "react";
import { newCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { provider } from "../../firebase/firebase";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  handleSignIn = e => {
    this.setState(() => ({ [e.target.name]: e.target.value }));
  };
  // newCreateUserWithEmailAndPassword(email, password);

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form>
          <p>Email</p>
          <input type="text" placeholder="Email" name={this.state.email} />
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            name={this.state.password}
          />
        </form>
      </div>
    );
  }
}
export default SignIn;
