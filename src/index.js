import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//Middleware
app.use(errorHandler);

//Testing the database connection
app.get("/", async (req, res) => {
  const result = await pool.query(`SELECT current_database()`);
  res.send(`Connected to database: ${result.rows[0].current_database}`);
});

//Create the users table if it doesn't exist
createUserTable();

//Routes
app.use("/api", userRoutes);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});