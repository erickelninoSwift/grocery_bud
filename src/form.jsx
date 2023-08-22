import React from "react";
import { useState } from "react";
export const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  console.log(newItemName);

  const addNewItems = (e) => {
    e.preventDefault();
    console.log(newItemName);
  };

  const removeData = (id) => {
    console.log("remove data");
  };
  return (
    <form onSubmit={(e) => addNewItems(e)}>
      <h4>Grocery bud Starter</h4>
      <article className="form-control">
        <input
          type="text"
          name="grocery"
          value={newItemName}
          className="form-input"
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </article>
    </form>
  );
};
