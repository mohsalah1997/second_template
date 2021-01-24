import React from "react";
import "./style.css";

import Button from "../button/Button";

export default function DivBody({ title, content, buttonContent, imageSrc }) {
  return (
    <div className={imageSrc ? "content" : "noncontent"}>
      <img src={imageSrc} />
      <div>
        <hr className="content__hr" />
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque
          sint blanditiis placeat culpa! Dolor explicabo saepe earum nam
          distinctio impedit expedita! Optio dignissimos, amet consequuntur
          excepturi recusandae ad laboriosam!
        </p>
        <Button text={buttonContent} />
      </div>
    </div>
  );
}
