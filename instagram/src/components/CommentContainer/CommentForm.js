import React from "react";
import "./Form.css";

const CommentForm = props => {
  return (
    <form onSubmit={props.addComment}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={props.comment}
        onChange={props.change}
      />
      <i className="fas fa-ellipsis-h" />
    </form>
  );
};
export default CommentForm;
