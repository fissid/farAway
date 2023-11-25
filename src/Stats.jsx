export default function Stats({ length, packed }) {
  return (
    <footer className="stats">
      <em>
        You have {length} items on your list, and you already packed ({(length / packed) * 10}%) of them.{" "}
      </em>
    </footer>
  );
}
