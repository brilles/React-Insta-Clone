import React from "react";
import HeaderSection from "./HeaderSection";
import MediaSection from "../MediaContainer/MediaSection";
import CommentSection from "../CommentContainer/CommentContainer";
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
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
