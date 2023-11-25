import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";
import { useState } from "react";

export default function App() {
  const [initialItems, setInitialItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
  ]);
  const numItem = initialItems.length;
  const packedItems = initialItems.reduce(function (acc, value) {
    return acc + (value.packed ? 1 : 0);
  }, 0);

  function setInitialItemsForForm(newItem) {
    setInitialItems((prev) => [...prev, newItem]);
  }
  function deleteItemHandler(id) {
    setInitialItems((prev) => prev.filter((each) => each.id !== id));
  }
  function packedItemHandler(id) {
    setInitialItems((prev) => prev.map((each) => (each.id === id ? { ...each, packed: !each.packed } : each)));
  }
  return (
    <div className="app">
      <Logo />
      <Form onSetNewItem={setInitialItemsForForm} />
      <PackingList initialItems={initialItems} toDeleteItem={deleteItemHandler} toSetPackedItem={packedItemHandler} />
      <Stats length={numItem} packed={packedItems} />
    </div>
  );
}
