import express from "express";
import { usersController } from "../controllers/usersController.js";
import * as authenticate from "./../controllers/authController.js";

const router = express.Router();

router.post("/signup", authenticate.signUp);
router.post("/login", authenticate.login);

router.post("/forgotpassword", authenticate.forgotPassword);
router.patch("/resetpassword/:token", authenticate.resetPassword);

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser);
router
  .route("/:id")
  .get(usersController.getAUser)
  .patch(usersController.updateUser)
  .delete(
    authenticate.protectedRoute,
    authenticate.restrictAccessTo("admin"),
    usersController.deleteUser
  );

export default router;
