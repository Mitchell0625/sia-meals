import React, { Component } from "react";
import {
  userSignInWithEmailAndPassword,
  newCreateUserWithEmailAndPassword
} from "../../firebase/auth";

const theSign = WrappedComponent => {
  class Sign extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        user: {}
      };
      this.handleSignIn = this.handleSignIn.bind(this);
      this.signInUser = this.signInUser.bind(this);
      this.newUser = this.newUser.bind(this);
    }
    handleSignIn = e => {
      this.setState(() => ({ [e.target.name]: e.target.value }));
    };
    signInUser = e => {
      console.log("hit");
      userSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {})
        .catch(err => console.log(err));
      e.preventDefault();
    };
    newUser = e => {
      newCreateUserWithEmailAndPassword(this.state.email, this.state.password);
    };
    render() {
      const { email, password, user } = this.state;
      const otherProps = {
        email: email,
        password: password,
        handleSignIn: this.handleSignIn,
        signInUser: this.signInUser,
        newUser: this.newUser
      };
      return (
        <div>
          <WrappedComponent {...this.props} {...otherProps} />
        </div>
      );
    }
  }
  return Sign;
};

export default theSign;

export const Form = props => {
  return (
    <form onSubmit={props.signed}>
      <p>Email</p>
      <input type="text" placeholder="Email" name={props.email} />
      <p>Password</p>
      <input type="text" placeholder="Password" name={props.password} />
      <input type="submit" value="Sign In" />
    </form>
  );
};
