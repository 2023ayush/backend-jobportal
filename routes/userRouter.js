import express from "express";
import { logout, register } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

export default router;
