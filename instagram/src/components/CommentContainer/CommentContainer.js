import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Username = styled.span`
  font-weight: 500;
`;

const CommentContainer = props => {
  return (
    <div className="text">
      <Username>{props.comment.username} </Username>
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

CommentContainer.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentContainer;
