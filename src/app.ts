import cors from "cors";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import userRoute from "./routes/user";

const swaggerConfig: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "온보딩 Api",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/*.ts"], // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc(swaggerConfig);

export const app = express();

// Setting
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

//Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/user", userRoute);

// Error
app.use(errorNotFoundHandler);
app.use(errorHandler);
