import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.postsData.map(datum => (
        <Post key={datum.imgUrl} post={datum} />
      ))}
    </div>
  );
};

export default PostContainer;
