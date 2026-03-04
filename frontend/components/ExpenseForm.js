import { useState } from "react";

export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, amount, category, date })
    });
    setTitle(""); setAmount(""); setCategory(""); setDate("");
  };

  return (
    <div className="flex flex-col space-y-2">
      <input className="border p-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="border p-2" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <select className="border p-2" value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
      </select>
      <input className="border p-2" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add Expense</button>
    </div>
  );
}
