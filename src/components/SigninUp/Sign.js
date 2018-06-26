import React from "react";
import { userSignInWithEmailAndPassword } from "../../firebase/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    // this.signInUser = this.signInUser.bind(this);
  }

  //   signInUser = e => {
  //     const logi = this.props.logi;
  //     userSignInWithEmailAndPassword(logi.email, logi.password)
  //       .then(() => {})
  //       .catch(err => console.log(err));
  //     e.preventDefault();
  //   };
  render() {
    // const logi = this.props.log;
    console.log(this.props.logi);
    return <Form signed={this.props.logi.handleSignIn} />;
  }
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    // this.signInUser = this.signInUser.bind(this);
  }

  //   signInUser = e => {
  //     const logi = this.props.logi;
  //     userSignInWithEmailAndPassword(logi.email, logi.password)
  //       .then(() => {})
  //       .catch(err => console.log(err));
  //     e.preventDefault();
  //   };
  render() {
    // const logi = this.props.log;
    console.log(this.props.logi.logi);
    return (
      <Form
        signed={this.props.logi.signInUser}
        email={this.props.logi.state.email}
        password={this.props.logi.state.password}
      />
    );
  }
}

class Sign extends React.Component {
  constructor(props) {
    super(props);
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
    // const logi = this.props.logi;
    console.log("hit");
    userSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {})
      .catch(err => console.log(err));
    // e.preventDefault();
  };

  render() {
    return (
      <div>
        {this.props.render(this)}
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

const Form = props => {
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
