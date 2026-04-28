import express from "express";
import cors from "cors";
import { config } from "dotenv";

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

// Core middleware
app.use(cors());
app.use(express.json());

// Static frontend
app.use(express.static(STATIC_DIR));

/*
  PUBLIC ROUTES (no JWT)
*/
app.use("/api/v1/auth", authController);

/*
  PROTECTED ROUTES (JWT required)
*/
app.use("/api/v1/workouts", verifyJWT, workoutController);
app.use("/api/v1/moods", verifyJWT, moodController);
app.use("/api/v1/users", verifyJWT, userController);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://${SERVER}:${PORT}`);
});
