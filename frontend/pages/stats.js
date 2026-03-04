import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Navbar from "../components/Navbar";

export default function Stats() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  const categories = [...new Set(expenses.map(e => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categories.map(cat =>
          expenses.filter(e => e.category === cat).reduce((sum, e) => sum + Number(e.amount), 0)
        ),
        backgroundColor: "rgba(75,192,192,0.6)"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <Bar data={data} />
      </div>
    </div>
  );
}
