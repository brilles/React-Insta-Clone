import React from "react";
import instagramlogo from "../../assets/instagramlogo.png";
import "./Search.css";
function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="logo">
        <i className="fab fa-instagram fa-3x" />
        <img src={instagramlogo} alt="instagram logo" />
      </div>
      <div className="search">
        <input type="text" placeholder=" Search" />
      </div>
      <div className="links">
        <div className="links-item">
          <i className="far fa-compass fa-2x" />
        </div>
        <div className="links-item">
          <i className="far fa-heart fa-2x" />
        </div>
        <div className="links-item">
          <i className="far fa-user fa-2x" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
