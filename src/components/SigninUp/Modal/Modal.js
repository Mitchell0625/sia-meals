import React, { Component } from "react";
import SignIn from "../SignIn";
import "./Modal.css";

const Modal = ({ close, display }) => {
  const showHide = display ? "modal display-block" : "modal display-none";
  {
    console.log(display);
  }
  return (
    <div className={showHide}>
      <button onClick={close}>&times;</button>
      <SignIn />
    </div>
  );
};

export default Modal;
