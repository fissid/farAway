import Item from "./Item";
export default function PackingList({ initialItems, toDeleteItem, toSetPackedItem }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} toDeleteItem={toDeleteItem} toSetPackedItem={toSetPackedItem}></Item>
        ))}
      </ul>
    </div>
  );
}
