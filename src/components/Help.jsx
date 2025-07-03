import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Help.css";

const Help = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button and follow the instructions.",
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team at support@tastehub.com or call us at +91 012-345-6789.",
    },
    {
      question: "How do I verify my account with OTP?",
      answer: "To verify your account with OTP, enter the code sent to your mobile number or email address in the verification form.",
    },
    {
      question: "I forgot my username. How can I recover it?",
      answer: "To recover your username, click on the 'Forgot Username' link on the login page. Follow the instructions to retrieve your username.",
    },
    {
      question: "How do I change my email address?",
      answer: "To change your email address, go to your account settings and select the option to edit your email. Enter your new email address and follow the prompts to save the changes.",
    },
    {
      question: "What should I do if I encounter an error while using the app?",
      answer: "If you encounter an error while using the app, please try refreshing the page or restarting the app. If the issue persists, contact our support team for assistance.",
    },
    {
      question: "How do I update my payment information?",
      answer: "To update your payment information, go to your account settings and select the option to manage payment methods. Follow the instructions to add, edit, or remove payment methods.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="help-page">
      <div className="help-header">
        <h1>Help Center</h1>
        <p>Find answers to common questions or contact our support team directly.</p>
        <button className="contact-button" onClick={handleContactClick}>
            Contact Support
            <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => handleToggleAccordion(index)}
              >
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;