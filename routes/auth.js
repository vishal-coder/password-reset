import express from "express";
import dotenv from "dotenv";

import {
  signupValidation,
  loginValidation,
  forgotPasswordValidation,
  restPasswordValidation,
  verifyToken,
  portfolioMail,
} from "../validation/authValidation.js";
import {
  signup,
  login,
  forgotPassword,
  resetpassword,
  verifyEmail,
} from "../controller/AuthController.js";
import { signupService } from "../services/authService.js";

dotenv.config();

const router = express.Router();
router.get("/", (req, res) => {
  res.send("auth route working");
});

router.post("/signup", signupValidation(), signup);
router.post("/login", loginValidation(), login);
router.post("/verifyEmail/:token", verifyEmail);
router.post("/forgot-password", forgotPasswordValidation(), forgotPassword);
router.post("/resetPassword", restPasswordValidation(), resetpassword);
router.post("/verifyToken", verifyToken);
router.post("/portfoliomail", portfolioMail);
//verifyToken;

export const authRouter = router;
