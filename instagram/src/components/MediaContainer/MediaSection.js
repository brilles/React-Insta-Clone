import React from "react";
import "../MediaContainer/MediaSection.css";
// will have to change to class later
const MediaSection = props => {
  return (
    <div className="img-container">
      <img src={props.imageUrl} alt="media" />
    </div>
  );
};

export default MediaSection;
