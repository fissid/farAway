export default function Item({ item }) {
  return (
    <li>
      <input type="checkbox" name="checked" id="checked" />
      {item.description}
    </li>
  );
}
