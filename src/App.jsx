import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";
import { useState } from "react";

export default function App() {
  const [initialItems, setInitialItems] = useState([{ id: 1, description: "Charger", quantity: 1, packed: false }]);
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
  function resetInitialItems() {
    window.confirm("Are you sure you want to delete all items?") && setInitialItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onSetNewItem={setInitialItemsForForm} />
      <PackingList initialItems={initialItems} toDeleteItem={deleteItemHandler} toSetPackedItem={packedItemHandler} reset={resetInitialItems} />
      <Stats length={numItem} packed={packedItems} />
    </div>
  );
}
