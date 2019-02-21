import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: none;
  border-radius: 3px;
  margin-top: 32px;
  height: 60px;
  .thumbnail-img > img {
    width: 30px;
    border-radius: 50%;
    margin-left: 15px;
    margin-top: 3px;
    margin-right: 8px;
  }
`;

const Username = styled.div`
  font-weight: 500;
`;

const HeaderSection = props => {
  return (
    <Header>
      <div className="thumbnail-img">
        <img src={props.thumbnailUrl} alt="thumbnail" />
      </div>
      <Username>{props.username}</Username>
    </Header>
  );
};

export default HeaderSection;
