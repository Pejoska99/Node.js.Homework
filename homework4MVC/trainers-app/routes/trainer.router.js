import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import express  from 'express';
import TrainerController from '../controllers/trainers.controller.js';




const router = Router();

router.get('/trainers', TrainerController.getTrainers);
router.post('/trainers', TrainerController.addTrainer);
router.get('/trainers/:id', TrainerController.getTrainerById);
router.put('/trainers/:id', TrainerController.updateTrainer);
router.delete('/trainers/:id', TrainerController.deleteTrainer);
router.delete('/trainers', TrainerController.deleteAllTrainers);
router.patch('/trainers/:id/updateTrainerCoursesFinished', TrainerController.updateTrainerCoursesFinished);

// router.get("/public", express.static("public"));
router.get("/home", express.static("public"));
router.get("/home/image.jpeg", express.static("public"));





export default router;
