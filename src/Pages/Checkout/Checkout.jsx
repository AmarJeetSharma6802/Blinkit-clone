import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pushToDataLayer, buildUserData } from "../../lib/gtm";
import { saveAddress } from "../Reducer/addressSlice";
import AddressForm from "../Address/AddressForm";
import AddressCard from "../Address/AddressCard";
import "../Address/address.css";

const DELIVERY_FEE = 25;
const HANDLING_FEE = 4;

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const savedAddress = useSelector((state) => state.address.saved);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editingAddress, setEditingAddress] = useState(!savedAddress);
  const [addressConfirmed, setAddressConfirmed] = useState(false);

  const ecommerceItems = cart.items.map((item) => ({
    item_id: item.id,
    item_name: item.name || item.FirstP || "Unknown Product",
    price: Number(item.price),
    quantity: item.quantity,
  }));

  const fees = cart.totalPrice <= 500 ? DELIVERY_FEE + HANDLING_FEE : 0;
  const grandTotal = cart.totalPrice + fees;

  // Address proceed -> GA4 / Google Ads "add_shipping_info"
  const proceedWithAddress = (address) => {
    pushToDataLayer({
      event: "add_shipping_info",
      ecommerce: {
        currency: "INR",
        value: cart.totalPrice,
        shipping_tier: "8 minute delivery",
        items: ecommerceItems,
      },
      user_data: buildUserData(address),
    });

    console.log("add_shipping_info fired");
    setAddressConfirmed(true);
  };

  const handleSaveAddress = (address) => {
    dispatch(saveAddress(address));
    setEditingAddress(false);
    proceedWithAddress(address);
  };

  const handleChangeAddress = () => {
    setAddressConfirmed(false);
    setEditingAddress(true);
  };

  const handlePayment = () => {
    pushToDataLayer({
      event: "purchase",
      ecommerce: {
        transaction_id: "ORDER_" + Date.now(),
        currency: "INR",
        value: cart.totalPrice,
        items: ecommerceItems,
      },
      user_data: buildUserData(savedAddress),
    });

    console.log("purchase fired");

    navigate("/success");
  };

  if (cart.items.length === 0) {
    return (
      <div className="checkout-page">
        <h1 className="address-title">Checkout</h1>
        <p className="address-subtitle">Your cart is empty.</p>
        <button className="address-submit" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="address-title">Checkout</h1>

      <div className="checkout-section">
        <h2>Delivery Address</h2>

        {editingAddress ? (
          <AddressForm
            initialValues={savedAddress}
            submitLabel="Save & Proceed"
            onSubmit={handleSaveAddress}
            onCancel={savedAddress ? () => setEditingAddress(false) : undefined}
          />
        ) : (
          <>
            <AddressCard address={savedAddress} onChange={handleChangeAddress} />
            {!addressConfirmed && (
              <div className="address-actions">
                <button
                  className="address-submit"
                  onClick={() => proceedWithAddress(savedAddress)}
                >
                  Deliver Here
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="checkout-section">
        <h2>Order Summary</h2>
        <div className="checkout-summary">
          {cart.items.map((item) => (
            <div className="checkout-line" key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="checkout-line">
            <span>Delivery & handling</span>
            <span>₹{fees}</span>
          </div>
          <div className="checkout-line total">
            <span>Grand total</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>
      </div>

      <button
        className="checkout-pay"
        onClick={handlePayment}
        disabled={!addressConfirmed}
      >
        Pay ₹{grandTotal}
      </button>
      {!addressConfirmed && (
        <p className="checkout-hint">Confirm your delivery address to continue</p>
      )}
    </div>
  );
};

export default Checkout;
