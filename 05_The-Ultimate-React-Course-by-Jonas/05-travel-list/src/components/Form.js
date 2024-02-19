import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDes] = useState("");
  const [quantity, setQuan] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    console.log(newItem.id);
    setQuan(1);
    setDes("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for trip 😊</h3>
      <select
        onChange={(e) => {
          setQuan(Number(e.target.value));
        }}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDes(e.target.value);
        }}
      />

      <button>ADD</button>
    </form>
  );
}
