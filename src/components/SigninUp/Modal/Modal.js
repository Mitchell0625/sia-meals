import React, { Component } from "react";
import SignIn from "../SignIn";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal-container">
        <SignIn />
      </div>
    );
  }
}
export default Modal;
