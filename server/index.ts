import express from "express";
import cors from "cors";
import workoutRoutes from "./controllers/workoutController";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/workouts", workoutRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
