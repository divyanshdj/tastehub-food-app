import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../utils/cartSlice";
import { CDN2_URL } from "../utils/constant";
import "../css/CartPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.warn("🗑️ Cart cleared!", { autoClose: 500 });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
    toast.info("➕ Item quantity increased");
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
    toast.info("➖ Item quantity decreased");
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    toast.error("❌ Item removed from cart");
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      ((item.card.info.finalPrice ||
        item.card.info.price ||
        item.card.info.defaultPrice) /
        100) *
        (item.quantity || 1),
    0
  );

  const handleOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty! Add items first.");
      return;
    }
    navigate("/payment");
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="cart-page-empty">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="cart-empty"
            style={{ height: "400px" }}
          />
          <h2>Your cart is empty!</h2>
          <h3>You can go to home page to view more restaurants</h3>
          <div className="link-home-btn">
            <Link to="/">
              Home <span className="material-symbols-outlined">open_in_new</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-page">
          <h1>Cart</h1>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.card.info.id} className="cart-item-card">
                <div className="cart-item-img">
                  <img
                    src={CDN2_URL + item.card.info.imageId}
                    alt={item.card.info.name}
                  />
                </div>
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.card.info.name}</h4>
                  <h5 className="cart-item-price">
                    ₹
                    {(
                      (item.card.info.finalPrice ||
                        item.card.info.price ||
                        item.card.info.defaultPrice) / 100
                    ).toFixed(2)}
                  </h5>
                  <div className="cart-quantity-controls">
                    <button
                      onClick={() => handleDecreaseQuantity(item.card.info.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.card.info.id)}
                    >
                      +
                    </button>
                    <button onClick={() => handleRemoveItem(item.card.info.id)}>
                      <span className="material-symbols-outlined">
                        delete_forever
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-bill-details">
            <h2>Bill Details</h2>
            <div className="bill-item">
              <span>Item Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="bill-item">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>
            <div className="bill-item">
              <span>Platform Fee</span>
              <span>₹6.22</span>
            </div>
            <div className="bill-item">
              <span>GST and Restaurant Charges</span>
              <span>₹24.78</span>
            </div>
            <div className="bill-total">
              <span>TO PAY</span>
              <span>₹{(totalAmount + 40 + 6.22 + 24.78).toFixed(2)}</span>
            </div>
          </div>
          <button className="cart-order-btn" onClick={handleOrder}>
            Order
          </button>
          <button className="cart-clear-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default CartPage;
