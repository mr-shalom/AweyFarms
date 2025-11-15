import express from "express";
import morgan from "morgan";
import productsRouter from "./routes/productsRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import ErrorHandler from "./utils/errorHandler.js";
import globalErrorController from "./controllers/globalErrorController.js";

const app = express();

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);

//handle unknown routes
app.use((req, res, next) => {
  next(
    new ErrorHandler(
      `Unable to fetch resource from ${req.originalUrl},as this path does not exist`,
      404
    )
  );
});

//handle errors globally
app.use(globalErrorController);

export default app;
