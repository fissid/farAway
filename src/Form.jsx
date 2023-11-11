export default function Form() {
  function addHandler(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <form className="add-form" onSubmit={addHandler}>
      <h3>What do you need for your trip? 📃</h3>
      <select>
        {Array.from({ length: 20 }, (cur, i) => i + 1).map((each) => (
          <option key={each} value={each}>
            {each}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item" />
      <button>Add</button>
    </form>
  );
}
