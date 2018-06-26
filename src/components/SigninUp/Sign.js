import React from "react";

class SignIn extends React.Component {
  render() {
    return <Form />;
  }
}

class Sign extends React.Component {
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

  render() {
    return (
      <div>
        {this.props.render(this.state)}
        {/* <form onSubmit={this.signInUser}>
          <p>Email</p>
          <input type="text" placeholder="Email" name={this.state.email} />
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            name={this.state.password}
          />
          <input type="submit" value="Sign In" /> */}
        {/* </form> */}
      </div>
    );
  }
}

class SignInn extends React.Component {
  render() {
    return (
      <div>
        <h2>SignIn</h2>
        <Sign render={logi => <SignIn logi={logi} />} />
      </div>
    );
  }
}
export default SignInn;

export const Form = props => {
  <form onSubmit={this.signInUser}>
    <p>Email</p>
    <input type="text" placeholder="Email" name={props.email} />
    <p>Password</p>
    <input type="text" placeholder="Password" name={props.password} />
    <input type="submit" value="Sign In" />
  </form>;
};
