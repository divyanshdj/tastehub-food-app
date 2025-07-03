import "../css/About.css";
const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About TasteHub</h1>
        <p className="about-subtitle">Delivering happiness since 2020</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="section-icon">restaurant</div>
          <h2>Our Mission</h2>
          <p>
            Bringing delicious meals from your favorite local restaurants 
            directly to your door with convenience and care.
          </p>
        </div>

        <div className="about-section">
          <div className="section-icon">history</div>
          <h2>Our Story</h2>
          <p>
            Founded by food enthusiasts in 2020, TasteHub now partners with 
            hundreds of restaurants serving thousands of happy customers daily.
          </p>
        </div>

        <div className="about-section">
          <div className="section-icon">star</div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><span className="list-icon">check</span> 150+ restaurant partners</li>
            <li><span className="list-icon">check</span> 30-min average delivery</li>
            <li><span className="list-icon">check</span> Easy-to-use platform</li>
            <li><span className="list-icon">check</span> 24/7 customer support</li>
          </ul>
        </div>

        <div className="about-section contact-section">
          <div className="section-icon">contact_support</div>
          <h2>Contact Us</h2>
          <div className="contact-info-about">
            <p><span className="contact-icon">email</span> contact@tastehub.com</p>
            <p><span className="contact-icon">phone</span> +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="about-section">
          <div className="section-icon">location_on</div>
          <h2>Our Locations</h2>
          <p>
            Serving cities across the country with plans to expand internationally.
            Check our website for the latest locations.
          </p>
        </div>

        <div className="about-section">
          <div className="section-icon">feedback</div>
          <h2>Customer Feedback</h2>
          <p>
            We value your feedback! Share your experience with us to help improve our service.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;