import React, { Component } from "react";
import { provider, auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import theSign, { Form } from "./Sign";

// authListener = () => {
//   auth.onAuthStateChanged(user => {
//     if (user) {
//       this.setState({ user });
//       this.props.addUser(this.state.user);
//     } else {
//       this.setState({ user: null });
//     }
//   });
// };

// function mapStateToProps(state) {
//   const user = state.reducer;
//   return {
//     user
//   };
// }
// export default connect(
//   mapStateToProps,
//   { addUser }
// )(SignIn);
class SignIn extends Component {
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <h2>Sign In now</h2>
        <Form
          signed={this.props.signInUser}
          email={this.props.email}
          password={this.props.password}
          handleSignIn={this.props.handleSignIn}
        />
        <Link to="/signup">
          <p>Create an Account</p>
        </Link>
      </div>
    );
  }
}

export default theSign(SignIn);
