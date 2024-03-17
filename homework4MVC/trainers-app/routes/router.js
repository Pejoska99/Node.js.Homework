import { Router } from 'express';
import trainersRouter from './trainers.router.js';

const router = Router();

router.use('/trainers', trainersRouter);

export default router;
