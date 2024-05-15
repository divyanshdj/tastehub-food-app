import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {

  const [LoginBtnName, setLoginBtnName] = useState("Login");

  function showSideBar() {
    const side = document.querySelector(".nav-items-sidebar");
    side.style.display = "flex";
  }

  function hideSideBar() {
    const side = document.querySelector(".nav-items-sidebar");
    side.style.display = "none";
  }

  return (
    <div className="header">

      <svg className="menu-btn" onClick={showSideBar} alt="menu" xmlns="http://www.w3.org/2000/svg" height="30" fill="white" viewBox="0 -960 960 960" width="45">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      
      <div className="nav">
        <ul className="nav-items">
          <li className="nav-item-list"> <Link className="hide" to="/">Home</Link></li>
          <li className="nav-item-list"> <Link className="hide" to="/about">About Us</Link></li>
          <li className="nav-item-list"> <Link className="hide" to="/offers">Deals & Offers</Link></li>
          <li className="nav-item-list"> <Link className="hide" to="/contact">Contact Us</Link></li>
          <li className="nav-item-list"> <Link className="hide" to="/help">Help</Link></li>
        </ul>
      </div>

      <div className="cart">
        <span className="material-symbols-outlined cart-btn">shopping_cart</span>
        <button className="loginBtn" onClick={
          ()=>{LoginBtnName==="Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login")}
        }
          >{LoginBtnName}<span className="material-symbols-outlined">{LoginBtnName.toLowerCase()}</span>
        </button>
      </div>

      <ul className="nav-items-sidebar">
        <a onClick={hideSideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </a>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/offers">Deals & Offers</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </div>
  );
};

export default Header;
