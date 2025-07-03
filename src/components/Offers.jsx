import React from "react";
import { Link } from "react-router-dom";
import "../css/Offers.css";

const OfferCard = ({ imageSrc, alt, title, description, validity }) => (
  <div className="offer-card bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
    <img
      className="offer-image w-full h-48 object-cover"
      src={imageSrc}
      alt={alt}
    />
    <div className="offer-details p-6">
      <h2 className="offer-name text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="offer-description text-gray-600 mb-3">{description}</p>
      <p className="offer-validity text-sm text-gray-500 mb-4">{validity}</p>
      <Link to="/">
        <button
          className="offer-button text-white font-medium py-2 px-4 rounded-md w-full"
          aria-label={`Order now for ${title}`}
        >
          Order Now
        </button>
      </Link>
    </div>
  </div>
);

const Offers = () => {
  const offers = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
    alt: "Offer Image 1",
    title: "Mega Saver: ₹150 Off Today",
    description: "Order now and instantly save ₹150 on meals above ₹599.",
    validity: "Valid until 5th August 2024",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1516876319496-d5a849a2e89b?q=80&w=2680&auto=format&fit=crop",
    alt: "Offer Image 2",
    title: "Double Treat: Buy 1 Get 1 Snack",
    description: "Order any snack combo and get another absolutely free.",
    validity: "Valid until 20th September 2024",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1670220163411-3922943bbd36?w=800&auto=format&fit=crop&q=60",
    alt: "Offer Image 3",
    title: "Family Feast: 20% Off",
    description: "Big orders for big families now get a flat 20% off on weekends!",
    validity: "Valid every Sat & Sun",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=2578&auto=format&fit=crop",
    alt: "Offer Image 4",
    title: "Free Delivery Above ₹249",
    description: "Enjoy free doorstep delivery when you order over ₹249.",
    validity: "Valid till 15th August 2024",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1625944525735-f5e9f22f91d5?w=800&auto=format&fit=crop&q=60",
    alt: "Offer Image 5",
    title: "Loyalty Reward: ₹50 Cashback",
    description: "Returning users get ₹50 cashback on their next order.",
    validity: "Available till 30th November 2024",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
    alt: "Offer Image 6",
    title: "Evening Cravings? 30% Off",
    description: "Grab 30% off on evening snacks daily at 5-8.",
    validity: "Everyday 5PM–8PM",
  },
];


  return (
    <div className="offers-container">
      <h1 className="offers-title">Special Offers</h1>
      <p className="contact-subtitle">Grab the best deals on your favorite meals!</p>
      <div className="offer-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            imageSrc={offer.imageSrc}
            alt={offer.alt}
            title={offer.title}
            description={offer.description}
            validity={offer.validity}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;