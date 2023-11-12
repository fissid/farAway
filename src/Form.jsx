import { useState } from "react";

export default function Form({ setNewItem }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);
  function addHandler(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = {
      description: desc,
      quantity: quantity,
      packed: false,
      id: Math.floor(Math.random() * 100),
    };

    setNewItem(newItem);
    setDesc("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={addHandler}>
      <h3>What do you need for your trip? 📃</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (cur, i) => i + 1).map((each) => (
          <option key={each} value={each}>
            {each}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
