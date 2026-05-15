import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pushToDataLayer } from "../../lib/gtm";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handlePayment = () => {
    pushToDataLayer({
      event: "purchase",
      ecommerce: {
        transaction_id: "ORDER_" + Date.now(),
        currency: "INR",
        value: cart.totalPrice,
        items: cart.items.map((item) => ({
          item_id: item.id,
          item_name: item.name || item.FirstP || "Unknown Product",
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });

    console.log("purchase fired");

    navigate("/success");
  };

  return (

    <div
      style={{
        padding: "40px",
      }}
    >

      <h1>
        Fake Checkout Page
      </h1>

      <p>
        Testing Ecommerce Tracking
      </p>

      <button onClick={handlePayment}>

        Fake Pay Now

      </button>

    </div>

  );

};

export default Checkout;
