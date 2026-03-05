const express = require("express");
const db = require("../db");
const router = express.Router();

// Get all expenses for logged-in user
router.get("/", async (req, res) => {
  const userId = req.user.id;
  const expenses = await db.query(
    "SELECT * FROM expenses WHERE user_id=$1 ORDER BY date DESC",
    [userId]
  );
  res.json(expenses.rows);
});

// Add new expense
router.post("/", async (req, res) => {
  const { title, amount, category, date } = req.body;
  const userId = req.user.id;

  const newExpense = await db.query(
    "INSERT INTO expenses (title, amount, category, date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [title, amount, category, date, userId]
  );
  res.json(newExpense.rows[0]);
});

// Delete expense
router.delete("/:id", async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  await db.query("DELETE FROM expenses WHERE id=$1 AND user_id=$2", [id, userId]);
  res.json({ message: "Expense deleted" });
});

module.exports = router;
