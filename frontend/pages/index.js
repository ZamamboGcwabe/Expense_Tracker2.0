import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ExpenseList from "../components/ExpenseList";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <select
          className="border p-2 my-4"
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
        </select>
        <ExpenseList expenses={expenses} filter={filter} />
      </div>
    </div>
  );
}
