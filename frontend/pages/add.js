import ExpenseForm from "../components/ExpenseForm";
import Navbar from "../components/Navbar";

export default function Add() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Add Expense</h1>
        <ExpenseForm />
      </div>
    </div>
  );
}
