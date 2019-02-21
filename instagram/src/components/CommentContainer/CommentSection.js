import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

const CommentSectionContainer = styled.div`
  border: 1px solid lightgray;
  border-top: none;
  padding: 8px 16px;
  line-height: 1.5;
  padding-top: 0;
`;

const Time = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;
  font-size: 0.8rem;
  color: gray;
  font-weight: 500;
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsData: props.comments,
      timestamp: props.timestamp,
      comment: ""
    };
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      commentsData: [
        ...this.state.commentsData,
        {
          username: "human44",
          text: this.state.comment
        }
      ],
      comment: ""
    });
  };

  handleChanges = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <CommentSectionContainer>
        {this.state.commentsData.map((commentsDatum, index) => (
          <CommentContainer key={index} comment={commentsDatum} />
        ))}
        <Time>
          <p>
            {moment(
              this.props.timestamp,
              "'MMMM Do YYYY, h:mm:ss a'"
            ).fromNow()}
          </p>
        </Time>
        <CommentForm
          comment={this.state.comment}
          addComment={this.addNewComment}
          change={this.handleChanges}
        />
      </CommentSectionContainer>
    );
  }
}

CommentSection.propTypes = {
  commentsData: PropTypes.arrayOf(
    PropTypes.shape({ username: PropTypes.string, text: PropTypes.string })
  )
};

export default CommentSection;
