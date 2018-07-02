import React, { Component } from "react";
import { StripeCheckout } from "react-stripe-checkout";
// import SignIn from "../../SigninUp/SignIn";
import Modal from "../../SigninUp/Modal/Modal";

class Payment extends Component {
  constructor() {
    super();

    this.state = {
      display: "none",
      background: "background"
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal = () => {
    this.setState({ display: "block" });
  };

  render() {
    return (
      <div className={this.state.background}>
        Payment Page
        {!this.props.user ? (
          <div>
            <button onClick={this.showModal}>Sign In</button>
            <div className="modal" style={{ display: this.state.display }}>
              <Modal />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Payment;
