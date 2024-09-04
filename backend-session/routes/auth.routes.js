import { Router } from "express";
import { login } from "../controller/auth.controller.js";

export const authRoutes = Router();

authRoutes.post("/login", login);
