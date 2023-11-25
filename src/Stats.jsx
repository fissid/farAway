export default function Stats({ length, packed }) {
  return (
    <footer className="stats">
      <em>
        You have {length} items on your list, and you already packed ({packed === 0 ? 0 : Math.floor((packed / length) * 100)}%) of them.{" "}
      </em>
    </footer>
  );
}
