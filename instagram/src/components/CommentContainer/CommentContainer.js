import React, { Component } from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import "./Comment.css";
import moment from "moment";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsData: props.comments,
      timestamp: props.timestamp
    };
  }
  render() {
    return (
      <div className="comment-container">
        {console.log(this.props)}
        {this.state.commentsData.map((commentsDatum, index) => (
          <CommentSection key={index} comment={commentsDatum} />
        ))}
        <div className="time">
          <p>
            {moment(
              this.props.timestamp,
              "'MMMM Do YYYY, h:mm:ss a'"
            ).fromNow()}
          </p>
        </div>
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
