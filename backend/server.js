import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, "/config.env");

dotenv.config({ path: configPath });

const DB = process.env.DB_URL;

const PORT = process.env.PORT || 4000;

mongoose
  .connect(DB)
  .then(() => console.log("Connection to database, successful"))
  .catch(() => console.log("Unable to connect to database"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
