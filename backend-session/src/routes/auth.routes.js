import { Router } from "express";
import { login, signup } from "../controller/auth.controller.js";
import { logout, session } from "../controller/session.controller.js";

export const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/register", signup);
authRoutes.get("/session", session);
authRoutes.post("/logout", logout);
