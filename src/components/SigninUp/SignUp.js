import React, { Component } from "react";
import { auth } from "../../firebase/firebase";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  newUser = e => {
    auth.newCreateUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
  };
  render() {
    return <div>SignUp</div>;
  }
}
export default SignUp;
