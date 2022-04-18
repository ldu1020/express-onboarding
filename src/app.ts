import cors from "cors";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import * as path from "path";
import expressJSDocSwagger from "express-jsdoc-swagger";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import { swaggerConfig } from "./swagger/config";
import userRoute from "./routes/user";

export const app = express();

// Setting
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));

// Routes
expressJSDocSwagger(app)(swaggerConfig); // path: /api-docs
app.use("/user", userRoute);

// Error
app.use(errorNotFoundHandler);
app.use(errorHandler);
