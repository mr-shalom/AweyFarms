import express from "express";
import { productsController } from "../controllers/productsController.js";
import * as authenticate from "./../controllers/authController.js";
const router = express.Router();
router
  .route("/")
  .get(authenticate.protectedRoute, productsController.getAllProducts)
  .post(
    authenticate.protectedRoute,
    authenticate.restrictAccessTo("aadmin"),
    productsController.createNewProduct
  );
router
  .route("/:id")
  .get(productsController.getAProduct)
  .patch(
    authenticate.protectedRoute,
    authenticate.restrictAccessTo("admin"),
    productsController.updateProduct
  )
  .delete(
    authenticate.protectedRoute,
    authenticate.restrictAccessTo("admin"),
    productsController.deleteProduct
  );

export default router;
