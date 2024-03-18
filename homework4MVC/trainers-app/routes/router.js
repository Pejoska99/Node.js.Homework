import { Router } from 'express';
import trainersRouter from './trainers.router.js';

const router = Router();

router.use('/trainers', trainersRouter);
router.use ("/public", express.static("public"));

export default router;
