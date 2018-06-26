import React from "react";
import { StripeCheckout } from "react-stripe-checkout";
import SignIn from "../../SigninUp/SignIn";

const Payment = () => {
  return (
    <div>
      Payment Page
      {/* {!this.props.user ? <SignIn /> : ""} */}
      <SignIn />
    </div>
  );
};

export default Payment;
