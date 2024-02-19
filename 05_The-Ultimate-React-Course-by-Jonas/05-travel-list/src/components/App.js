import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItem] = useState(initialItems);

  function handleAddItem(newItem) {
    setItem((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItem(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleToggleItem(id) {
    setItem(
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  function handleClearUp() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        itemsInput={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearUp={handleClearUp}
      />
      <Stats itemsInput={items} />
    </div>
  );
}

export default App;
