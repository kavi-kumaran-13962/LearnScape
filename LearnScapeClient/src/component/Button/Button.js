import React from "react";
import "./Button.scss";
export default function Button(props) {
  const className = `btn btn__${props.title}`;
  const text = props.text ? props.text : props.title;

  return (
    <div>
      <button className={className}>
<<<<<<< HEAD
        <span className={`btn-${text}`}>{text}</span>
=======
        <span className="btn-text">{text}</span>
>>>>>>> 825bbeabc9aabb4b1e1dac9ff33b2a7476fba50d
      </button>
    </div>
  );
}
