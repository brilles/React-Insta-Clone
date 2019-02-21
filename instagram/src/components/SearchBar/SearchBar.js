import React from "react";
import instagramlogo from "../../assets/instagramlogo.png";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  height: 98px;
  border-bottom: 1px solid lightgray;
  .logo {
    width: 33.3%;
    display: flex;
    align-items: center;
  }
  .fab {
    padding: 3px 26px 0 20px;
    border-right: 1px solid #000;
  }
  .logo > img {
    padding-top: 11px;
    width: 140px;
    height: 40px;
    padding-left: 22px;
  }
`;

const Links = styled.div`
  padding-top: 10px;
  width: 33.3%;
  display: flex;
  flex-direction: row-reverse;
  .links-container {
    display: flex;
    width: 56%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Search = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    margin-top: 6px;
    width: 278px;
    height: 32px;
    border-radius: 3px;
    border: 1px solid lightgray;
    text-align: center;
    font-size: 1.1rem;
    background-color: rgba(211, 211, 211, 0.13);
  }
`;

const SearchBar = props => {
  return (
    <SearchBarContainer>
      <div className="logo">
        <i className="fab fa-instagram fa-3x" />
        <img src={instagramlogo} alt="instagram logo" />
      </div>
      <Search>
        <input
          type="text"
          placeholder="Search"
          onKeyDown={props.handleSearch}
        />
      </Search>
      <Links>
        <div className="links-container">
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
      </Links>
    </SearchBarContainer>
  );
};

export default SearchBar;
