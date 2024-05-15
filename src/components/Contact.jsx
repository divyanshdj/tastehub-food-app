import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Customer Support</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h2>Technical Support</h2>
          <p>Email: techsupport@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h2>Sales</h2>
          <p>Email: sales@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
