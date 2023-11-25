export default function Item({ item, toDeleteItem, toSetPackedItem }) {
  function deleteBtnHandler(id) {
    toDeleteItem(id);
  }

  function packedCheckBox(id) {
    toSetPackedItem(id);
  }
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => packedCheckBox(item.id)} />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          deleteBtnHandler(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
