import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "Item1",
      checked: false,
    },
    {
      id: 2,
      item: "Item2",
      checked: true,
    },
    {
      id: 3,
      item: "Item3",
      checked: false,
    },
  ]);

  const handleChange = (id) => {
    const listItems = items.map((item) => 
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="main-container">
      <Header />
      <Content items={items} setItems={setItems} handleChange={handleChange} />
    </div>
  );
}

export default App;
