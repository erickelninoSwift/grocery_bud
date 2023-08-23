import { useState } from "react";
import { Form } from "./form";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { SingleItem } from "./SingleItem";

const setlocalStorage = (newItesm) => {
  localStorage.setItem("list", JSON.stringify(newItesm));
};

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    let id = uuidv4();
    let itemObject = { id: id, name: itemName, completed: false };
    const newItems = [...items, itemObject];
    setItems(newItems);
    toast.success("date was saved!");
    setlocalStorage(newItems);
  };

  const removeItem = (itemID) => {
    let newItem = items.filter((data) => {
      return data.id != itemID;
    });
    setItems(newItem);
    setlocalStorage(newItem);
  };

  const setNewItem = (taskItem, check) => {
    let getData = getLocalStorage();
    let findIndex = items.findIndex((data) => {
      return data.id === taskItem.id;
    });
    getData[findIndex] = {
      id: taskItem.id,
      name: taskItem.name,
      completed: check,
    };
    getData.map((data) => {
      return data.id === getData[findIndex].id ? getData[findIndex] : data;
    });

    setlocalStorage(getData);
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="section-center">
        <Form item={addItem} />
        {items &&
          items.map((itemPicked) => {
            return (
              <SingleItem
                key={itemPicked.id}
                taskItem={itemPicked}
                removeData={removeItem}
                setMyNewItem={setNewItem}
              />
            );
          })}
      </section>
    </>
  );
};

export default App;
