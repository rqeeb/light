import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { projectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.post("/signup", arcjetProtection, signup);

router.post("/login", arcjetProtection, login);

router.post("/logout", arcjetProtection, logout);

router.put("/updateProfile", arcjetProtection, protectRoute, updateProfile);

router.get("/check", arcjetProtection, protectRoute, (req, res) => {
  res.status(200).json(req.user);
});
