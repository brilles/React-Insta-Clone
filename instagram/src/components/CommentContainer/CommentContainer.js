import React, { Component } from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsData: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((commentDatum, index) => (
          <CommentSection key={index} comment={commentDatum} />
        ))}
        <CommentForm />
      </div>
    );
  }
}

export default CommentContainer;
