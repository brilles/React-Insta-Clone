import React from "react";
import "./LikeSection.css";

const LikeSection = props => {
  return (
    <div className="likes-container">
      <div className="icons">
        <i className="far fa-heart fa-lg" onClick={props.addLike} />
        {/* <i class="fas fa-heart fa-lg" /> */}
        <i className="far fa-comment fa-lg" />
      </div>
      <div className="likes">{props.likes} likes</div>
    </div>
  );
};
export default LikeSection;
