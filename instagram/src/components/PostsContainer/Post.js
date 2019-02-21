import React from "react";
import HeaderSection from "./HeaderSection";
import MediaSection from "../MediaContainer/MediaSection";
import CommentSection from "../CommentContainer/CommentSection";
import LikeSection from "./LikeSection";
import styled from "styled-components";

const PostContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  :last-of-type {
    margin-bottom: 32px;
  }
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLike = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  render() {
    return (
      <PostContainer>
        <HeaderSection
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <MediaSection imageUrl={this.props.post.imageUrl} />
        <LikeSection addLike={this.addLike} likes={this.state.likes} />
        <CommentSection
          comments={this.props.post.comments}
          timestamp={this.props.post.timestamp}
        />
      </PostContainer>
    );
  }
}

export default Post;
