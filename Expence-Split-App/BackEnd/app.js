import express from "express";
import cors from "cors";
import usersRoutes from "./Routes/users.routes.js";
import expensesRoutes from "./Routes/expenses.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/expenses", expensesRoutes);

export default app;