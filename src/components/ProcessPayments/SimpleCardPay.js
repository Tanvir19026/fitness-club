import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SimpleCardPay = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymenterror, setPaymentError] = useState(null);
  const [paymentSuccess, setpaymentSuccess] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setpaymentSuccess(null);
    } else {
        setpaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handlePayment(paymentMethod.id);
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
          paymenterror && <h2 style={{color:"red"}}>{paymenterror}</h2>
      }
        {
          paymentSuccess && <h2 style={{color:"green"}}>Thank you for the payment.</h2>
      }
    </div>
  );
};
export default SimpleCardPay;