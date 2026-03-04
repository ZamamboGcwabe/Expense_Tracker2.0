export default function ExpenseList({ expenses, filter }) {
  const filtered = filter
    ? expenses.filter(e => e.category === filter)
    : expenses;

  return (
    <ul className="mt-4">
      {filtered.map(exp => (
        <li
          key={exp.id}
          className="border p-2 rounded mb-2 flex justify-between bg-white shadow-sm"
        >
          <div>
            <span className="font-semibold">{exp.title}</span> - ${exp.amount}
          </div>
          <div className="text-gray-500">{exp.category}</div>
        </li>
      ))}
    </ul>
  );
}
