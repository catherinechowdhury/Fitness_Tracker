import express from "express";
import cors from "cors";
import workoutController from "./controllers/workoutController";
import moodController from "./controllers/moodController";
import authController from "./controllers/authContoller";
import userController from "./controllers/usersControllers";
import { config } from "dotenv";
config();

const PORT = process.env.PORT ?? 3000;
const SERVER = process.env.SERVER ?? `localhost`;
const STATIC_DIR = process.env.STATIC_DIR ?? "client/fitness-tracker/dist";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app
  .use(express.static(STATIC_DIR))
  .use("/api/v1/auth", authController)
  .use("/api/v1/workouts", workoutController)
  .use("/api/v1/moods", moodController)
  .use("/api/v1/users", userController);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://${SERVER}:${PORT}`);
});
