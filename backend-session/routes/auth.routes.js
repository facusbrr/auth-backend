import { Router } from "express";
import { login, signup } from "../controller/auth.controller.js";

export const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/register", signup);
