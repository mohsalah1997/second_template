import React from "react";
import "./style.css";

export default function Button({ text, onClick, className }) {
  return (
    <div>
      <button onClick={() => onClick()} className={`btn ${className}`}>
        {text}
      </button>
    </div>
  );
}
