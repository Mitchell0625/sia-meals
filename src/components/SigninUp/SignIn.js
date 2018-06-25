import React, { Component } from "react";
import { userSignInWithEmailAndPassword } from "../../firebase/auth";
// import { auth } from "../../firebase/firebase";
import { provider, auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../ducks/reducer";

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
    userSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {})
      .catch(err => console.log(err));
    e.preventDefault();
  };
  authListener = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.props.addUser(this.state.user);
      } else {
        this.setState({ user: null });
      }
    });
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

function mapStateToProps(state) {
  const user = state.reducer;
  return {
    user
  };
}
export default connect(
  mapStateToProps,
  { addUser }
)(SignIn);
