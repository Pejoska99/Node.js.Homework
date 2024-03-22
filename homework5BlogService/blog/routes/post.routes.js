import { Router } from "express";
import { PostController } from "../controllers/post.controller.js";
import canDeleteOrUpdatePost from "../middlewares/post.middleware.js";

const router = Router();

router.get("", PostController.getAllPosts);
router.get("/:id", PostController.getPost);
router.post("", PostController.createPost);
router.patch("/:id", canDeleteOrUpdatePost, PostController.updatePost);
router.delete("/:id", canDeleteOrUpdatePost, PostController.deletePost);

export default router;

