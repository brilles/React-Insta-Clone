import React from "react";
import Form from "./Form.css";

const CommentForm = props => {
  return (
    <form>
      <input type="text" placeholder="Add a comment..." />
      <i class="fas fa-ellipsis-h" />
    </form>
  );
};
export default CommentForm;
