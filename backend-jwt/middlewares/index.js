import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import cookieParser from "cookie-parser";

export const middlewareInitial = (app) => {
  const corsOptions = {
    origin: [
      "http://localhost:5500",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  };
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors(corsOptions));
  app.use(
    session({
      secret: "session_secret_key", // Cambia esto por una clave secreta en producción
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Usar 'true' si usas HTTPS
    })
  );
};
