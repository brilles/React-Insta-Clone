import React, { Component } from "react";

const CommentSection = props => {
  return (
    <div className="text">
      <span className="username">{props.comment.username}</span>
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

export default CommentSection;
