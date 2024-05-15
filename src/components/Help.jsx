import React, { useState } from "react";

const Help = () => {
  // Fake FAQ data
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
      answer: "You can contact our customer support team at support@example.com or call us at +1 (123) 456-7890.",
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

  return (
    <div className="help-container">
      <div className="help-content">
        <h1 className="help-title">Help & Support</h1>
        <p className="help-description">
          Let's take a step ahead and help you better.
        </p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => handleToggleAccordion(index)}
              >
                {faq.question} <span class="material-symbols-outlined">add</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        {/* Add your contact information here */}
      </div>
    </div>
  );
};

export default Help;
