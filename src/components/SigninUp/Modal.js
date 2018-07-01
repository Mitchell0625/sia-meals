import React, { Component } from "react";
import SignIn from "./SignIn";
const styles = {
  zIndex: 1
};

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}
export default Modal;
