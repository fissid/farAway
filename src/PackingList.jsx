import { useState } from "react";
import Item from "./Item";
export default function PackingList({ initialItems, toDeleteItem, toSetPackedItem, reset }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = initialItems;
  if (sortBy === "desc") sortedItems = initialItems.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") sortedItems = initialItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} toDeleteItem={toDeleteItem} toSetPackedItem={toSetPackedItem}></Item>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by input description</option>
          <option value="packed">Sort by input packed status</option>
        </select>
        <button type="reset" onClick={reset}>
          Clear list
        </button>
      </div>
    </div>
  );
}
