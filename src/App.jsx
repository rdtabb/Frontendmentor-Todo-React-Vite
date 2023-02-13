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
      checked: false,
      visibility: true
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

  const handleClick = () => {
    const listItems = items.filter((item) => 
      item.checked == false
    )
    setAndSaveItems(listItems)
  }

  const handleActive = () => {
    console.log("clicked")
    items.forEach(item => {
      item.checked == true 
        ? {...item, visibility: !item.visibility}
        : item
    });
  }

  const handleLightTheme = () => {
    const bodyDocument = document.querySelector('body')
    bodyDocument.classList.add('light')
    localStorage.setItem("darkMode", "disabled")
  }

  const handleDarkTheme = () => {
    const bodyDocument = document.querySelector('body')
    bodyDocument.classList.remove('light')
    localStorage.setItem("darkMode", "enabled")
  }

  const theme = localStorage.getItem("darkMode")
  if (theme == "enabled" || theme == null) {
    handleLightTheme()
  } else {
    handleDarkTheme()
  }

  const handleTheme = () => {
    const theme = localStorage.getItem("darkMode")
    if (theme == "enabled" || theme == null) {
      handleLightTheme()
    } else {
      handleDarkTheme()
    }
  }

  return (
    <div className="main-container">
      <Header
        handleTheme={handleTheme}
      />
      <AddTodo 
        newItems={newItems} 
        setNewItems={setNewItems} 
        handleSubmit={handleSubmit} 
      />
      <Content 
        handleClick={handleClick} 
        items={items} 
        setItems={setItems} 
        handleChange={handleChange} 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
