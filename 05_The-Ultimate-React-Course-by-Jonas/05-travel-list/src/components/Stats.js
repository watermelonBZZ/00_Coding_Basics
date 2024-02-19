export default function Stats({ itemsInput }) {
  if (!itemsInput.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = itemsInput.length;
  const numPacked = itemsInput.filter((item) => {
    return item.packed;
  }).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <em>
      <footer className="stats">
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked}${percentage}%`}
      </footer>
    </em>
  );
}
