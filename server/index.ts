import express from "express";
import cors from "cors";
import workoutRoutes from "./routes/workout.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/workouts", workoutRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
