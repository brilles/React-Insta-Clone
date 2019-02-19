import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="posts-container">
      {props.postsData.map(datum => (
        <Post key={datum.timestamp} post={datum} />
      ))}
    </div>
  );
};

export default PostContainer;
