export default function Stats({ length, packed }) {
  const percentage = Math.floor((packed / length) * 100);
  return (
    <footer className="stats">
      <em>{percentage !== 100 ? `You have ${length} items on your list, and you already packed (${packed === 0 ? 0 : percentage}%) of them 👌` : `You got everything! Ready to go 🚀`}</em>
    </footer>
  );
}
