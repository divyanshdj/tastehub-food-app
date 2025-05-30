import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "creditCard") {
      const { cardNumber, expiry, cvv } = paymentDetails;

      if (cardNumber.length !== 16 || cvv.length !== 3) {
        toast.error("Please enter valid credit card number and CVV");
        return;
      }

      if (!expiry) {
        toast.error("Please enter the card expiry date");
        return;
      }

      const [year, month] = expiry.split("-").map(Number);
      if (!year || !month || month < 1 || month > 12) {
        toast.error("Invalid expiry date format");
        return;
      }

      const now = new Date();
      const expiryDate = new Date(year, month, 0); // last day of expiry month

      if (expiryDate < now) {
        toast.error("Card expiry date must be in the future");
        return;
      }
    } else if (paymentMethod === "upi") {
      if (!paymentDetails.upiId.includes("@")) {
        toast.error("Please enter valid UPI ID");
        return;
      }
    }

    toast.success("Payment Successful! 🎉");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div
      className="payment-page"
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "40px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Payment</h1>

      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        Order Summary
      </h2>
      <div style={{ maxHeight: "180px", overflowY: "auto", marginBottom: "20px" }}>
        {cartItems.map((item) => (
          <p key={item.card.info.id} style={{ marginBottom: "8px", fontSize: "16px" }}>
            {item.card.info.name} x {item.quantity || 1} - ₹
            {(
              ((item.card.info.finalPrice ||
                item.card.info.price ||
                item.card.info.defaultPrice) /
                100) *
              (item.quantity || 1)
            ).toFixed(2)}
          </p>
        ))}
      </div>

      <h3 style={{ textAlign: "left", marginBottom: "30px" }}>
        Total: ₹{totalAmount.toFixed(2)}
      </h3>

      <form onSubmit={handlePaymentSubmit}>
        <div style={{ marginBottom: "20px", fontSize: "18px" }}>
          <label style={{ marginRight: "25px", cursor: "pointer" }}>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={() => setPaymentMethod("creditCard")}
              style={{ marginRight: "8px" }}
            />
            Credit Card
          </label>

          <label style={{ cursor: "pointer" }}>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
              style={{ marginRight: "8px" }}
            />
            UPI
          </label>
        </div>

        {paymentMethod === "creditCard" && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Card Number:
              </label>
              <input
                type="text"
                name="cardNumber"
                maxLength="16"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "15px",
              }}
            >
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Expiry Date:
                </label>
                <input
                  type="month"
                  name="expiry"
                  value={paymentDetails.expiry}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", marginBottom: "5px" }}>CVV:</label>
                <input
                  type="password"
                  name="cvv"
                  maxLength="3"
                  value={paymentDetails.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </div>
          </>
        )}

        {paymentMethod === "upi" && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>UPI ID:</label>
            <input
              type="text"
              name="upiId"
              value={paymentDetails.upiId}
              onChange={handleChange}
              placeholder="example@upi"
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "18px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
