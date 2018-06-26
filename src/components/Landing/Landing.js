import React, { Component } from "react";
import "./Landing.css";
import SignIn from "../SigninUp/SignIn";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <h2>Fresh</h2>
        <h2>Flavorful</h2>
        <h2>Fast</h2>
        <SignIn />
      </div>
    );
  }
}
export default Landing;
