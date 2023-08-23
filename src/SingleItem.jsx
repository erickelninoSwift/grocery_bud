import React from "react";
import { useState } from "react";

export const SingleItem = ({ taskItem, removeData, setMyNewItem }) => {
  const [isChseck, setIsChecked] = useState(taskItem.completed);

  function toggle() {
    setMyNewItem(taskItem, isChseck);
  }
  toggle();
  return (
    <article className="items">
      <div className="single-item">
        <input
          type="checkbox"
          checked={isChseck}
          onChange={() => setIsChecked((complete) => !complete)}
        />
        <p
          className="single-item"
          style={
            isChseck
              ? { textDecoration: "line-through", textTransform: "capitalize" }
              : { textDecoration: "none", textTransform: "capitalize" }
          }
        >
          {taskItem.name}
        </p>
        <button
          type="button"
          className="btn remove-btn"
          style={{ color: "white", padding: "5px" }}
          onClick={() => removeData(taskItem.id)}
        >
          delete
        </button>
      </div>
    </article>
  );
};
