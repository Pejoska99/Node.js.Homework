import { Router } from 'express';
import express  from 'express';
import trainersRouter from './trainer.router.js';

const router = Router();

router.use('/trainers', trainersRouter);
router.use ("/public", express.static("public"));

export default router;
