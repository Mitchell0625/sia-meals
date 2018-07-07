import React, { Component } from "react";
import { StripeCheckout } from "react-stripe-checkout";

import Modal from "../../SigninUp/Modal/Modal";

class Payment extends Component {
  state = {
    display: false,
    background: "background"
  };
  componentDidMount() {
    this.showModal();
  }
  showModal = () => {
    this.setState({ display: true });
  };
  closeModal = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <div className="payment-page">
        Payment Page
        {!this.props.user ? (
          <div className="modal">
            <Modal display={this.state.display} close={this.closeModal} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Payment;
