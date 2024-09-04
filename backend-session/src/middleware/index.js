import express from "express";
import cors from "cors";
import morgan from "morgan";
import { sessionConfig } from "../config/session.config.js";

export const middlewareInitial = (app) => {
  //CORS Configuracion
  const corsOptions = {
    origin: [
      "http://localhost:5500",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:4000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  };

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(sessionConfig);
};
