import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "../css/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add this to force Firebase to get fresh user data
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Force refresh of user data
        currentUser.reload().then(() => {
          setUser(currentUser);
          setFormData({
            name: currentUser.displayName || "User",
            email: currentUser.email || "",
          });
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully", { autoClose: 1000 });
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Failed to logout");
      });
  };

  if (loading) {
    return <div className="carousel-loader">
                    <div className="loader-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="offers-title profile-title">Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-avatar">
          <div className="avatar-circle">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/047/542/396/small_2x/user-icon-symbol-design-illustration-vector.jpg" 
              alt="Profile" 
              className="default-avatar" 
            />
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-field">
            <label>Name</label>
            <p>{formData.name || "No name provided"}</p>
          </div>

          <div className="profile-field">
            <label>Email</label>
            <p>{formData.email}</p>
          </div>

          <div className="btn-group">
            <button onClick={handleLogout} className="logout-btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 16L21 12M21 12L17 8M21 12H7M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Logout
          </button>

          <button onClick={() => navigate("/")} className="logout-btn home-btn">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L3 10V21H9V15H15V21H21V10L12 3Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
  </svg>
  Home
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;