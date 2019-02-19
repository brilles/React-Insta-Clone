import React from "react";
import HeaderSection from "./HeaderSection";
import MediaSection from "../MediaContainer/MediaSection";
import CommentSection from "../CommentContainer/CommentSection";
import "./Post.css";
import LikeSection from "./LikeSection";

const Post = props => {
  return (
    <div className="post-container">
      <HeaderSection
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <MediaSection imageUrl={props.post.imageUrl} />
      <LikeSection likes={props.post.likes} />
      <CommentSection
        comments={props.post.comments}
        timestamp={props.post.timestamp}
      />
    </div>
  );
};

export default Post;
