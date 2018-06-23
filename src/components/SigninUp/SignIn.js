import React, { Component } from "react";
import { userSignInWithEmailAndPassword } from "../../firebase/auth";
// import { auth } from "../../firebase/firebase";
import { provider, auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      user: {}
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.signInUser = this.signInUser.bind(this);
  }
  handleSignIn = e => {
    this.setState(() => ({ [e.target.name]: e.target.value }));
  };

  signInUser = e => {
    auth
      .userSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {})
      .catch(err => console.log(err));
    e.preventDefault();
  };
  authListener = () => {
    auth.onAuthStateChanged(this.state.user);
  };
  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form onSubmit={this.signInUser}>
          <p>Email</p>
          <input type="text" placeholder="Email" name={this.state.email} />
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            name={this.state.password}
          />
          <input type="submit" value="Sign In" />
        </form>
        <Link to="/signup">
          <p>Create an Account</p>
        </Link>
      </div>
    );
  }
}
export default SignIn;
