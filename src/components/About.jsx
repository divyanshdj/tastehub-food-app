import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About TasteHub</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At TasteHub, our mission is to bring delicious, high-quality meals
            from your favorite local restaurants directly to your door. We aim
            to make dining at home as convenient and enjoyable as dining out.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            TasteHub was founded in 2020 by a group of food enthusiasts who
            wanted to make it easier for people to enjoy their favorite dishes
            without leaving the comfort of their homes. Since then, we've grown
            to partner with hundreds of restaurants and serve thousands of happy
            customers every day.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide selection of restaurants</li>
            <li>Fast and reliable delivery</li>
            <li>Easy-to-use app and website</li>
            <li>Excellent customer service</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <p>Email: contact@tastehub.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default About;
