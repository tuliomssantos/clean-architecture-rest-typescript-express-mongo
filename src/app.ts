import express from "express";
import { router } from "./routes";
import { Request, Response, NextFunction } from "express";
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(router);

export { app };
