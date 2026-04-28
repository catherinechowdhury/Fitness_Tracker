import express from "express";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import workoutController from "./controllers/workoutController";
import moodController from "./controllers/moodController";
import authController from "./controllers/authContoller";
import userController from "./controllers/usersControllers";
import { verifyJWT } from "./middleware/auth";

config();

const PORT = process.env.PORT ?? 3000;
const SERVER = process.env.SERVER ?? "localhost";
const STATIC_DIR = process.env.STATIC_DIR ?? "client/fitness-tracker/dist";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_DIR));

// Routes
app.use("/api/v1/auth", authController);
app.use("/api/v1/workouts", verifyJWT, workoutController);
app.use("/api/v1/moods", verifyJWT, moodController);
app.use("/api/v1/users", verifyJWT, userController);
app.get("/*", (_req, res) => {
  res.sendFile(path.resolve(STATIC_DIR, "index.html"));
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://${SERVER}:${PORT}`);
});
