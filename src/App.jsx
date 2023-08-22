import { useState } from "react";
import { Form } from "./form";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    let id = uuidv4();

    let itemObject = {
      id: id,
      name: itemName,
      completed: false,
    };

    setItems(() => {
      return [...items, itemObject];
    });
    toast.success("date was saved!");
  };
  console.log(items);
  return (
    <>
      <section className="section-center">
        <ToastContainer />
        <Form item={addItem} />
      </section>
    </>
  );
};

export default App;
