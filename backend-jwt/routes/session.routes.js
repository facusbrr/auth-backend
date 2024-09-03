import { Router } from "express";
import { logout, session } from "../controllers/session.controller.js";
import validarJwt from "../middlewares/validar-jwt.js";

export const sessionRoutes = Router();

sessionRoutes.get("/session", validarJwt, session);
sessionRoutes.post("/logout", validarJwt, logout);
