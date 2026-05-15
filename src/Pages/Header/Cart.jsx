import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../Reducer/cartSlice";
import "../Reducer/cart.css";
import bill from "../../assets/bar.png";
import scootor from "../../assets/motorbike.png";
import { pushToDataLayer } from "../../lib/gtm";
import { useNavigate } from "react-router-dom";

const Cart = ({ closeCart }) => {
  const texes = [
    {
      id: 1,
      Delivery: 25,
      Handling: 4,
    },
  ];

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getItemName = (item) => {
    const savedName = item.name || item.FirstP || item.item_name;

    if (savedName) {
      return savedName;
    }

    const previousItem = window.dataLayer
      ?.flatMap((entry) => entry?.ecommerce?.items || [])
      .find((dataLayerItem) => dataLayerItem.item_id === item.id);

    return previousItem?.item_name || `Item ${item.id}`;
  };

  //  ye view_Cart for google ads traking
  useEffect(() => {
    if (cart.items.length > 0) {
      pushToDataLayer({
        event: "view_cart",

        ecommerce: {
          currency: "INR",

          value: cart.totalPrice,

          items: cart.items.map((item) => ({
            item_id: item.id,

            item_name: getItemName(item),

            price: Number(item.price),

            quantity: item.quantity,
          })),
        },
      });
    }
  }, []);

  const handleAddItem = (item) => {
    dispatch(addItem(item));

    pushToDataLayer({
      event: "add_to_cart",
      ecommerce: {
        currency: "INR",
        value: Number(item.price),
        items: [
          {
            item_id: item.id,
            item_name: getItemName(item),
            price: Number(item.price),
            quantity: 1,
          },
        ],
      },
    });
  };

  const isPriceLessThanOrEqual500 = cart.totalPrice <= 500;

  // If the price is greater than ₹500, set taxes to zero
  const totalPriceWithTaxes = isPriceLessThanOrEqual500
    ? cart.totalPrice + texes[0].Delivery + texes[0].Handling
    : cart.totalPrice;

  const handleClearCart = () => {
    dispatch(clearCart());
    console.log("Cart after clearing:", cart); // Verify cart is cleared
  };

  const handleCheckout = () => {
    pushToDataLayer({
      event: "begin_checkout",

      ecommerce: {
        currency: "INR",

        value: cart.totalPrice,

        items: cart.items.map((item) => ({
          item_id: item.id,

          item_name: getItemName(item),
          price: item.price,

          quantity: item.quantity,
        })),
      },
    });

    console.log("begin_checkout fired");

    navigate("/checkout");
  };
  return (
    <div className="cart">
      <div className="cart-details">
        <h2 className="mycart-heading">My Cart</h2>
        <div className="closeCart" onClick={closeCart}>
          <i className="fa-solid fa-x"></i>
        </div>

        <div>
          {cart.items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.items.map((item) => (
              <div key={item.id} className="cart-items">
                <div className="watch-shipment">
                  <div className="watch">
                    <img src={item.watch} alt="" id="watch-cart" />
                    <div className="shipment">
                      <p className="devivery-para">Delivery in 8 minutes</p>
                      <p className="shipment">
                        Shipment of {item.quantity} item
                      </p>
                    </div>
                  </div>

                  <div className="cart-details-img">
                    <div className="cart-img-details">
                      <img
                        src={item.img}
                        alt={`${item.FirstP} item`}
                        className="cart-img"
                      />
                      <div className="cart-details-para">
                        <p className="items-details-name">{item.name}</p>
                        <p className="second-gram">{item.secondP}</p>
                        <p className="cart-price"> ₹{item.price} </p>
                      </div>
                    </div>
                    <div className="count-items">
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="addBtn"
                      >
                        -
                      </button>
                      <p className="count-shipment">{item.quantity}</p>
                      <button
                        onClick={() => handleAddItem(item)}
                        className="addBtn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bills">
                  <p>Bill details</p>
                  <div className="bill-details-flex">
                    <div className="bill-details-p">
                      <div className="bill-list">
                        <img src={bill} alt="" id="bill-img" />
                        <p className="bill-list-p">Total items</p>
                      </div>
                      <div className="bill-list">
                        <img src={scootor} alt="" id="bill-img" />
                        <p className="bill-list-p">Total items</p>
                      </div>
                      <div className="bill-list">
                        <p>
                          <i className="fa-solid fa-bag-shopping"></i>
                        </p>
                        <p className="bill-list-p">Total items</p>
                      </div>
                      <div className="bill-list">
                        <p className="bill-list-p grand">Grand total</p>
                      </div>
                    </div>
                    <div className="bill-details-p">
                      <p className="price-bill"> ₹{item.price} </p>
                      {isPriceLessThanOrEqual500 &&
                        texes.map((tax, index) => (
                          <div key={index}>
                            <p className="price-bill">₹{tax.Delivery}</p>
                            <p className="price-bill">₹{tax.Handling}</p>
                          </div>
                        ))}
                      {!isPriceLessThanOrEqual500 && (
                        <div>
                          <p className="price-bill">₹0</p>
                          <p className="price-bill">₹0</p>
                        </div>
                      )}
                      <p>
                        <p className="grand-total">₹{totalPriceWithTaxes}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cancel-product">
          <p className="cancel-policy">Cancellation Policy</p>
          <p className="orders-para">
            Orders cannot be cancelled once packed for delivery. In case of
            unexpected delays, a refund will be provided, if applicable.
          </p>
        </div>

        {cart.items.length > 0 && (
          <div className="quantity-clear-btn">
            {/* Display the total price with or without taxes */}
            {/* <div className="price-quatity">
            <p className="total-price-p">Total Quantity: {cart.totalQuantity}</p>
            <p className="total-price-p">Total Price: ₹{totalPriceWithTaxes}</p> 
            </div> */}

            <button className="checkout" onClick={handleCheckout}>
              Proceed Item
            </button>
            <button onClick={handleClearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
