import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div className="text">
      <span className="username">{props.comment.username}</span>
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
