import Item from "./Item";
export default function PackingList({ initialItems, toDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} toDeleteItem={toDeleteItem}></Item>
        ))}
      </ul>
    </div>
  );
}
