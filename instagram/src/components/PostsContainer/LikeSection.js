import React from "react";
import styled from "styled-components";

const LikesContainer = styled.div`
  height: 30px;
  padding: 16px;
  padding-bottom: none;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom: none;
  font-weight: 500;
  .icons {
    .fa-heart {
      margin-right: 20px;
    }
    .fa-heart:active {
      color: red;
    }
    .fa-comment {
      transform: scaleX(-1);
    }
  }
`;

const Likes = styled.div`
  font-size: 0.95rem;
  padding: 10px 0;
`;

const LikeSection = props => {
  return (
    <LikesContainer>
      <div className="icons">
        <i className="far fa-heart fa-lg" onClick={props.addLike} />
        {/* <i class="fas fa-heart fa-lg" /> */}
        <i className="far fa-comment fa-lg" />
      </div>
      <Likes>{props.likes} likes</Likes>
    </LikesContainer>
  );
};
export default LikeSection;
