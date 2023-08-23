import React from "react";
import { useState } from "react";

export const SingleItem = ({ taskItem, removeData, setMyNewItem }) => {
  const [isChecked, setIsChecked] = useState(taskItem.completed);

  return (
    <article className="items">
      <div className="single-item">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            return setIsChecked((complete) => {
              setMyNewItem(taskItem, complete);
              return !complete;
            });
          }}
        />
        <p
          className="single-item"
          style={
            isChecked
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
