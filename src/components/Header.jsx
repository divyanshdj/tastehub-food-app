import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store)=>store.cart.items);

  const [LoginBtnName, setLoginBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

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
          <li style={{color:"white"}}>Status : {onlineStatus ? "✅ Online" : "🔴 Offline"}</li>
        </ul>
      </div>

      <div className="cart">
        <Link className="cart-button" to="/cart">
          <span className="material-symbols-outlined cart-btn">shopping_cart</span>
          <span className="cart-items">({cartItems.length})</span>
        </Link>
        <button className="loginBtn hide" onClick={
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
        <li style={{color:"black", padding:"3px 10px"}}>Status : {onlineStatus ? "✅ Online" : "🔴 Offline"}</li>
        <li><button className="loginBtn" style={{backgroundColor:"white", color:"black"}} onClick={
          ()=>{LoginBtnName==="Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login")}
        }
          >{LoginBtnName}<span className="material-symbols-outlined">{LoginBtnName.toLowerCase()}</span>
        </button></li>
      </ul>
    </div>
  );
};

export default Header;
