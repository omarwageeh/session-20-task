// import "./tag.css";
import React from "react";

function App({ tag, removeTag }) {
  return (
    <li className="tag-filter">
      <p>{tag}</p>
      <span className="close-span" onClick={() => removeTag(tag)}>
        ×
      </span>
    </li>
  );
}

export default App;
