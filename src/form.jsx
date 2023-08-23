import React from "react";
import { useState } from "react";

export const Form = ({ item }) => {
  const [newItemName, setNewItemName] = useState("");
  const addNewItems = (e) => {
    e.preventDefault();
    if (newItemName) {
      item(newItemName);
      setNewItemName("");
    }
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
