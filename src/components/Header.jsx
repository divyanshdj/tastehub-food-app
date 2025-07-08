import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import LoginPopUp from "./LoginPopUp";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  const onlineStatus = useOnlineStatus();
  const sidebarRef = useRef(null);
  const [shrunk, setShrunk] = useState(false);
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);

  const navigate = useNavigate();

  const handleShowLogin = () => {
    setShowLoginPopUp(true);
    setIsSidebarVisible(false);
  }

  const user = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/offers", label: "Deals & Offers" },
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
    {showLoginPopUp && <LoginPopUp setShowLoginPopUp={setShowLoginPopUp} setIsSidebarVisible={setIsSidebarVisible}/>}
    <div className={`header ${shrunk ? 'shrink-header' : ''}`}>
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

      <div className="logo" onClick={()=>navigate("/")}>
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
          {cartItems.length > 0 && (
    <span className="cart-items-size">{cartItems.length}</span>
  )}
        </Link>
        {user ? (
  <div className="user-dropdown-container hide">
    <button
      onClick={() => navigate("/profile")}
      className="loginBtn user-name-btn"
    >
      Hello, {user.displayName || user.email.split("@")[0]}
      <span className="material-symbols-outlined">expand_more</span>
    </button>
  </div>
) : (
  <button className="loginBtn hide" onClick={handleShowLogin}>
    Login
    <span className="material-symbols-outlined login-icon-btn">login</span>
  </button>
)}

      </div>

      <ul
        ref={sidebarRef}
        className={`nav-items-sidebar  ${isSidebarVisible ? 'active' : ''}`}
        style={{ display: isSidebarVisible ? "flex" : "none" }}
      >
        <a onClick={() => setIsSidebarVisible(false)} aria-label="Close menu" className="close-menu-btn-header">
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

        {user ? (
  <li className="user-dropdown-container">
    <button
      onClick={() => navigate("/profile")}
      className="loginBtn user-name-btn"
    >
      Hello, {user.email.split("@")[0]}
      <span className="material-symbols-outlined">expand_more</span>
    </button>
  </li>
) : (
  <li>
    <button className="loginBtn" onClick={handleShowLogin}>
      Login
      <span className="material-symbols-outlined login-icon-btn">login</span>
    </button>
  </li>
)}

      </ul>
    </div>
    </>
  );
};

export default Header;
