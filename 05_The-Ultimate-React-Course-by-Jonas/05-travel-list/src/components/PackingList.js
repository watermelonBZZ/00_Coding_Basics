import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  itemsInput,
  onDeleteItem,
  onToggleItem,
  onClearUp,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = itemsInput;

  if (sortBy === "description")
    sortedItems = itemsInput
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = itemsInput
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearUp}>Clear Up</button>
      </div>
    </div>
  );
}
