import React from "react";
// will have to change to class later
const MediaSection = props => {
  return (
    <div className="img-container">
      <img src={props.media.imageUrl} alt="media" />
    </div>
  );
};

export default MediaSection;
