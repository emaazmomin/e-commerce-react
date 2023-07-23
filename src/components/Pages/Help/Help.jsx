import React from "react";

export default function Help() {
  return (
    <>
      <div className="container my-3">
        <h3 className="text-center">How can we help you?</h3>
        <div className="border mt-3 p-3 rounded-3 help-question-div">
          <h5>I want to track my order</h5>
          <p>Check order status & call the delivery agent</p>
        </div>

        <div className="border mt-3 p-3 rounded-3 help-question-div">
          <h5>I want to manage my order</h5>
          <p>Cancel, change delivery date & address</p>
        </div>

        <div className="border mt-3 p-3 rounded-3 help-question-div">
          <h5>I want help with return and refunds</h5>
          <p>Manage and track returns</p>
        </div>

        <div className="border mt-3 p-3 rounded-3 help-question-div">
          <h5>I want help with other issues</h5>
          <p>Offers, payment, Eshoppee Plus & all other issues</p>
        </div>


      </div>
    </>
  );
}
