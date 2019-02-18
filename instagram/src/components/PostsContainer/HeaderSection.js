import React from "react";

const HeaderSection = props => {
  return (
    <div className="header">
      <div className="thumbnail-img">
        <img src={props.thumbnailUrl} alt="thumbnail" />
      </div>
      <div className="username">{props.username}</div>
    </div>
  );
};

export default HeaderSection;
