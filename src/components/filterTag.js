import "./filterTag.css";
import React from "react";
import Tag from "./tag";

export default function FilterTag({
  tags,
  setTagsList,
  tagsFilter,
  clearAllTags,
}) {
  const removeTag = (removedTag) => {
    setTagsList((tags) => {
      return tags.filter((tag) => tag !== removedTag);
    });
  };

  return tagsFilter ? (
    <div className="row">
      <div className="col-12">
        <div className="filter-tags-c">
          <ul id="filter-tags-list">
            {tags?.map((tag) => (
              <Tag tag={tag} removeTag={removeTag} />
            ))}
          </ul>
          <p className="clear-tags" id="js-clear-tags" onClick={clearAllTags}>
            Clear
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
