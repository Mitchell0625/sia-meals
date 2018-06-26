import React, { Component } from "react";
import "./Landing.css";
import SignInn from "../SigninUp/Sign";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <h2>Fresh</h2>
        <h2>Flavorful</h2>
        <h2>Fast</h2>
        <SignInn />
      </div>
    );
  }
}
export default Landing;
