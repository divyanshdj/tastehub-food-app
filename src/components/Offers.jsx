import React from "react";
import '../css/Offers.css';

const Offers = () => {
  return (
    <div className="offers-container">
      <h1 className="offers-title">Special Offers</h1>
      <div className="offer-card-container">
        <div className="offer-card">
          <img
            className="offer-image"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Offer Image 1"
          />
          <div className="offer-details">
            <h2 className="offer-name">30% Off on First Order</h2>
            <p className="offer-description">Save 30% on your first meal.</p>
            <p className="offer-validity">Valid until 31st Dec 2024</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            className="offer-image"
            src="https://images.unsplash.com/photo-1516876319496-d5a849a2e89b?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Offer Image 2"
          />
          <div className="offer-details">
            <h2 className="offer-name">Free Dessert on Orders $20+</h2>
            <p className="offer-description">
              Get a free dessert for orders over $20.
            </p>
            <p className="offer-validity">Valid until 31st Aug 2024</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            className="offer-image"
            src="https://images.unsplash.com/photo-1670220163411-3922943bbd36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
            alt="Offer Image 3"
          />
          <div className="offer-details">
            <h2 className="offer-name">Weekend Special: 25% Off</h2>
            <p className="offer-description">Enjoy 25% off every weekend.</p>
            <p className="offer-validity">Valid every Sat & Sun</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            className="offer-image"
            src="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=2578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Offer Image 4"
          />
          <div className="offer-details">
            <h2 className="offer-name">Free Delivery on Orders $30+</h2>
            <p className="offer-description">
              No delivery fee for orders over $30.
            </p>
            <p className="offer-validity">Valid until 31st Jul 2024</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            className="offer-image"
            src="https://images.unsplash.com/photo-1625944525735-f5e9f22f91d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            alt="Offer Image 5"
          />
          <div className="offer-details">
            <h2 className="offer-name">10% Off for Returning Customers</h2>
            <p className="offer-description">Enjoy 10% off your next order.</p>
            <p className="offer-validity">Valid until 31st Dec 2024</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            className="offer-image"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Offer Image 6"
          />
          <div className="offer-details">
            <h2 className="offer-name">Buy One, Get One Free</h2>
            <p className="offer-description">Buy one meal, get one free!</p>
            <p className="offer-validity">Valid until 30th Sept 2024</p>
            <button className="offer-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
