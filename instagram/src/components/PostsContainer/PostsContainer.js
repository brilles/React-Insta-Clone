import React from "react";
import Post from "./Post";

export default function PostContainer(props) {
  return (
    <div className="posts-container">
      {props.postsData.map(datum => (
        <Post key={datum.timestamp} post={datum} />
      ))}
    </div>
  );
}
