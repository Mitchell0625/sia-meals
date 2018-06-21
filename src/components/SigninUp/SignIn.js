import React, { Component } from "react";
import { newCreateUserWithEmailAndPassword } from "../../firebase/auth";

class SignIn extends Component {
  constructor() {
    super();
    state = {
      email: "",
      password: ""
    };

    newCreateUserWithEmailAndPassword(email, password);
  }
  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form>
          <p>Email</p>
          <input type="text" placeholder="Email" />
          <p>Password</p>
          <input type="text" placeholder="Password" />
        </form>
      </div>
    );
  }
}
export default SignIn;
