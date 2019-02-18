import React from "react";
import HeaderSection from "./HeaderSection";
import MediaSection from "../MediaContainer/MediaSection";
import CommentSection from "../CommentContainer/CommentContainer";

const Post = props => {
  return (
    <div className="post-container">
      <HeaderSection
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <MediaSection imageUrl={props.post.imageUrl} />
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
