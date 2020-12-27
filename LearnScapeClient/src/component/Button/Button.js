import React from "react";
import "./Button.scss";
export default function Button(props) {
  const className = `btn btn__${props.title}`;
  const text = props.text ? props.text : props.title;

  return (
    <div>
      <button className={className}>
        <span className="btn-text">{text}</span>
      </button>
    </div>
  );
}
