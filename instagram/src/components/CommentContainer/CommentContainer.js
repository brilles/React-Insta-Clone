import React, { Component } from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";

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
        {this.state.commentsData.map((commentsDatum, index) => (
          <CommentSection key={index} comment={commentsDatum} />
        ))}
        <CommentForm />
      </div>
    );
  }
}

CommentContainer.propTypes = {
  commentsData: PropTypes.arrayOf(
    PropTypes.shape({ username: PropTypes.string, text: PropTypes.string })
  )
};

export default CommentContainer;
