import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

export const authRoutes = Router();

authRoutes.post("/", login);
