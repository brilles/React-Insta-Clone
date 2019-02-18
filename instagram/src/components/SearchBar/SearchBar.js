import React from "react";
import instagramlogo from "../../assets/instagramlogo.png";
import "./Search.css";
function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="logo">
        <i class="fab fa-instagram" />
        <img src={instagramlogo} alt="instagram logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="links">
        <div className="links-item">
          <i class="far fa-compass" />
        </div>
        <div className="links-item">
          <i class="far fa-heart" />
        </div>
        <div className="links-item">
          <i class="far fa-user" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
