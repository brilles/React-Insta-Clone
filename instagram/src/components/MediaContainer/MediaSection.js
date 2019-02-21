import React from "react";

const MediaSection = props => {
  return (
    <div className="img-container">
      <img src={props.imageUrl} alt="media" />
    </div>
  );
};

export default MediaSection;
