import React from "react";
import "./Form.css";

const CommentForm = props => {
  return (
    <form>
      <input type="text" placeholder="Add a comment..." />
      <i className="fas fa-ellipsis-h" />
    </form>
  );
};
export default CommentForm;
