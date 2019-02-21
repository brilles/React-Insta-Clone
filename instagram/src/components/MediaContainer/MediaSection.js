import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const MediaSection = props => {
  return (
    <div className="img-container">
      <Img src={props.imageUrl} alt="media" />
    </div>
  );
};

export default MediaSection;
