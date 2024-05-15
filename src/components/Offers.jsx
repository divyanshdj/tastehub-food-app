import React from "react";

const Offers = () => {
  return (
    <div className="offers-container">
      <h1 className="offers-title">Special Offers</h1>
      <div className="carousel">
        <div className="offer-card">
          <img
            className="offer-image"
            src="https://via.placeholder.com/100"
            alt="Offer Image 1"
          />
          <div className="offer-details">
            <h2 className="offer-name">50% Off on First Order</h2>
            <p className="offer-description">
              Enjoy a special discount of 50% on your first order with us.
              Use code FIRST50 at checkout.
            </p>
            <p className="offer-validity">Valid until 31st Dec 2023</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>
        <div className="offer-card">
          <img
            className="offer-image"
            src="https://via.placeholder.com/100"
            alt="Offer Image 2"
          />
          <div className="offer-details">
            <h2 className="offer-name">Free Delivery Weekend</h2>
            <p className="offer-description">
              Get free delivery on all orders this weekend. No minimum order
              value required.
            </p>
            <p className="offer-validity">Valid every Saturday and Sunday</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>
        <div className="offer-card">
          <img
            className="offer-image"
            src="https://via.placeholder.com/100"
            alt="Offer Image 1"
          />
          <div className="offer-details">
            <h2 className="offer-name">50% Off on First Order</h2>
            <p className="offer-description">
              Enjoy a special discount of 50% on your first order with us.
              Use code FIRST50 at checkout.
            </p>
            <p className="offer-validity">Valid until 31st Dec 2023</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>
        <div className="offer-card">
          <img
            className="offer-image"
            src="https://via.placeholder.com/100"
            alt="Offer Image 2"
          />
          <div className="offer-details">
            <h2 className="offer-name">Free Delivery Weekend</h2>
            <p className="offer-description">
              Get free delivery on all orders this weekend. No minimum order
              value required.
            </p>
            <p className="offer-validity">Valid every Saturday and Sunday</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>
        {/* Add more offer cards as needed */}
      </div>
    </div>
  );
};

export default Offers;
