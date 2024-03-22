import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import userValidator from "../middlewares/user-validator.js";
const router = Router();

router.post("/register", userValidator, AuthController.registerUser);
router.post("/login", AuthController.loginUser);


export default router