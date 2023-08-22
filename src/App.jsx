import { useState } from "react";
import { Form } from "./form";
const App = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <section className="section-center">
        <Form />
      </section>
    </>
  );
};

export default App;
