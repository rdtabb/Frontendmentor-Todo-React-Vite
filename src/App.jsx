import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import AddTodo from "./components/AddTodo";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todolist")));

  const [newItems, setNewItems] = useState("")

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem("todolist", JSON.stringify(newItems))
  }

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newItem = {
      id,
      item,
      checked: false
    }
    const listItems = [...items, newItem]
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) return
    addNewItem(newItems)
    setNewItems("")
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => 
      item.id !== id
    )
    setAndSaveItems(listItems)
  }

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems)
  };

  return (
    <div className="main-container">
      <Header />
      <AddTodo newItems={newItems} setNewItems={setNewItems} handleSubmit={handleSubmit} />
      <Content items={items} setItems={setItems} handleChange={handleChange} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
