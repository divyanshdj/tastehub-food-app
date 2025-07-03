import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [LoginBtnName, setLoginBtnName] = useState("Login");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  const onlineStatus = useOnlineStatus();
  const sidebarRef = useRef(null);

  const toggleLogin = () => {
    setLoginBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/offers", label: "Deals & Offers" },
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="header">
      <svg
        className="menu-btn"
        onClick={() => setIsSidebarVisible(true)}
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        fill="white"
        viewBox="0 -960 960 960"
        width="45"
        aria-label="Open menu"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>

      <div className="logo">
        <img src="https://divyanshportfoilo.netlify.app/assets/img/logo.png" alt="logo" />
      </div>

      <nav className="nav">
        <ul className="nav-items">
          {navLinks.map((link) => (
            <li key={link.path} className={`nav-item-list ${isActive(link.path) ? "active" : ""}`}>
              <Link className="hide" to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ color: "white" }}>Status : {onlineStatus ? "✅ Online" : "🔴 Offline"}</li>
        </ul>
      </nav>

      <div className="cart">
        <Link className="cart-button" to="/cart">
          <span className="material-symbols-outlined cart-btn">shopping_cart</span>
          <span className="cart-items">({cartItems.length})</span>
        </Link>
        <button className="loginBtn hide" onClick={toggleLogin}>
          {LoginBtnName}
          <span className="material-symbols-outlined">{LoginBtnName.toLowerCase()}</span>
        </button>
      </div>

      <ul
        ref={sidebarRef}
        className="nav-items-sidebar"
        style={{ display: isSidebarVisible ? "flex" : "none" }}
      >
        <a onClick={() => setIsSidebarVisible(false)} aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </a>

        {navLinks.map((link) => (
          <li key={link.path} className={isActive(link.path) ? "active" : ""}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}

        <li style={{ color: "black", padding: "3px 10px" }}>
          Status : {onlineStatus ? "✅ Online" : "🔴 Offline"}
        </li>

        <li>
          <button
            className="loginBtn"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={toggleLogin}
          >
            {LoginBtnName}
            <span className="material-symbols-outlined">{LoginBtnName.toLowerCase()}</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
