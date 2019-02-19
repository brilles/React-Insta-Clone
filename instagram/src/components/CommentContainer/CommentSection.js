import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import "./Comment.css";
import moment from "moment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsData: props.comments,
      timestamp: props.timestamp,
      comment: ""
    };
  }

  handleChanges = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      commentsData: [
        ...this.state.commentsData,
        {
          username: "brilles",
          text: this.state.comment
        }
      ]
    });
  };

  render() {
    return (
      <div className="comment-container">
        {this.state.commentsData.map((commentsDatum, index) => (
          <CommentContainer key={index} comment={commentsDatum} />
        ))}
        <div className="time">
          <p>
            {moment(
              this.props.timestamp,
              "'MMMM Do YYYY, h:mm:ss a'"
            ).fromNow()}
          </p>
        </div>
        <CommentForm
          addComment={this.addNewComment}
          change={this.handleChanges}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  commentsData: PropTypes.arrayOf(
    PropTypes.shape({ username: PropTypes.string, text: PropTypes.string })
  )
};

export default CommentSection;
