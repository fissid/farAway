export default function Item({ item, toDeleteItem }) {
  function deleteBtnHandler(id) {
    toDeleteItem(id);
  }
  return (
    <li>
      <input type="checkbox" name="checked" id="checked" value={item.packed} />

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
