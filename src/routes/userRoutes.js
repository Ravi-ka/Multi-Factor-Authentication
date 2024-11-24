import express from "express";
import {
  authStatusController,
  loginController,
  logoutController,
  registerController,
  reset2FAController,
  setup2FAController,
  verify2FAController,
} from "../controller/userController.js";

export const userRoutes = express.Router();

userRoutes.post("/register", registerController); // Registration route
userRoutes.post("/login", loginController); // Login route
userRoutes.get("/status", authStatusController); // Auth Status
userRoutes.post("/logout", logoutController); // Logout route

userRoutes.post("/2fa/setup", setup2FAController); // 2fa setup
userRoutes.post("/2fa/verify", verify2FAController); // 2fa Verify
userRoutes.post("/2fa/reset", reset2FAController); // 2fa reset
