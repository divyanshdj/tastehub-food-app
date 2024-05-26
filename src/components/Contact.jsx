import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Customer Support</h2>
          <p>support@tastehub.com</p>
          <p>Phone: +91 012-345-6789</p>
        </div>
        <div className="contact-item">
          <h2>Technical Support</h2>
          <p>tech@tastehub.com</p>
          <p>Phone: +91 012-345-6789</p>
        </div>
        <div className="contact-item">
          <h2>Sales TasteHub Support</h2>
          <p>sales@tastehub.com</p>
          <p>Phone: +91 012-345-6789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
