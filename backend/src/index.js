const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const expensesRouter = require("./routes/expenses");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/expenses", authMiddleware, expensesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
