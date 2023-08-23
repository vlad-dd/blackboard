import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { register, login, getMe } from "./controllers/user.js";
import { loginValidator, registerValidator } from "./validators/auth.js";
import handleValidationErrors from "./middlewares/validationErrors.js";
import isAuth from "./middlewares/isAuth.js";
import logger from "./middlewares/logger.js";
import { createPlannerCard, deletePlannerCard, getAllPlannerCards, updatePlannerCard } from "./controllers/plannercard.js";
import { DATABASE_CONNECTION_STATUS, SERVER_START_ERROR_NOTIFICATION, SERVER_START_NOTIFICATION } from "./constants.js";
import { notificate } from "./utils/notificate.js";

const app = express();

app.use(express.json());
app.use(cors());

//profile
app.get("/profile", logger, isAuth, getMe);

//auth
app.post("/auth/register", logger, registerValidator, handleValidationErrors, register);
app.post("/auth/login", logger, loginValidator, handleValidationErrors, login);

//planner card
app.get("/cards", logger, isAuth, getAllPlannerCards)
app.post("/cards", logger, isAuth, createPlannerCard);
app.patch("/cards", logger, isAuth, updatePlannerCard);
app.delete("/cards", logger, isAuth, deletePlannerCard)

async function runBackendForFrontend() {
    try {
        mongoose.connect(process.env.DATABASE_CONNECTION_URL).then(() => notificate(DATABASE_CONNECTION_STATUS, 35)).catch((error) => notificate(error, 31));
        app.listen((process.env.SERVER_PORT), () => {
            notificate(SERVER_START_NOTIFICATION, 35);
        });
    } catch (error) {
        notificate(SERVER_START_ERROR_NOTIFICATION, 31);
    }
}

runBackendForFrontend();