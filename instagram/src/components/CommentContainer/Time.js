import React from "react";

const Time = props => {
  return (
    <div className="time">
      <p>{props.timestamp}</p>
    </div>
  );
};

export default Time;
