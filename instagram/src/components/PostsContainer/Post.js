import React from "react";
import HeaderSection from "./HeaderSection";
import MediaSection from "../MediaContainer/MediaSection";
import CommentSection from "../CommentContainer/CommentSection";
import "./Post.css";
import LikeSection from "./LikeSection";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="post-container">
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
      </div>
    );
  }
}

export default Post;
