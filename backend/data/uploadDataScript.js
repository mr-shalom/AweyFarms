import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Product } from "../models/productsModel.js";

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, "../config.env");
const productsFilePath = path.join(__dirname, "./products.json");

const productFile = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

dotenv.config({ path: configPath });

const DB = process.env.DB_URL;

mongoose.connect(DB).then(() => console.log("database connection, successful"));

const uploadToDatabase = async function () {
  try {
    const status = await Product.create(productFile);
    console.log(status);
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit();
  }
};

const clearDatabase = async function () {
  try {
    await Product.deleteMany();
    console.log("Database cleared !");
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit();
  }
};

const command = process.argv[2];
if (command === "--upload") {
  uploadToDatabase();
} else if (command === "--clearDB") {
  clearDatabase();
} else {
  process.exit();
}
