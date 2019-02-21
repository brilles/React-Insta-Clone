import React from "react";
import PropTypes from "prop-types";
import Username from "../Styles/Reusables";

const CommentContainer = props => {
  return (
    <div className="text">
      <Username type="comment">{props.comment.username} </Username>
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
