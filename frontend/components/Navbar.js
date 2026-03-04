import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Expense Tracker</h1>
      <div className="space-x-4">
        <Link href="/">Dashboard</Link>
        <Link href="/add">Add</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
