import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const order = useLoaderData();
  console.log(order);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-semibold my-6">Payment</h1>
      <p className="text-xl">
        Please pay <strong>{order.resellPrice}</strong> for your "{order.title}"
      </p>
      <div className="w-96 my-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm key={order._id} order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
