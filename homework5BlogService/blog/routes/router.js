import { Router } from "express";
import postRouter from "./post.routes.js";
import authRouter from "./auth.routes.js";
import tokenValidator from "../middlewares/token-validator.js";

const router = Router();

router.use(authRouter);
router.use("/posts", tokenValidator, postRouter);

export default router