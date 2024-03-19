import { Router } from 'express';
import express  from 'express';
import TrainerController from '../controllers/trainers.controller.js';

const router = Router();

// router.get('/trainers', TrainerController.getTrainers);
// router.post('/trainers', TrainerController.addTrainer);
// router.get('/trainers/:id', TrainerController.getTrainerById);
// router.put('/trainers/:id', TrainerController.updateTrainer);
// router.delete('/trainers/:id', TrainerController.deleteTrainer);
// router.delete('/trainers', TrainerController.deleteAllTrainers);
// router.patch('/trainers/:id/updateTrainerCoursesFinished', TrainerController.updateTrainerCoursesFinished);

router.get("",TrainerController.getTrainers);
router.post("",TrainerController.addTrainer);
router.get("/:id",TrainerController.getTrainerById);
router.put("/:id",TrainerController.updateTrainer);
router.delete("/:id",TrainerController.deleteTrainer);
router.delete("",TrainerController.deleteAllTrainers);
router.patch("/:id/updateTrainerCoursesFinished",TrainerController.updateTrainerCoursesFinished);


router.get("/home", express.static("public"));
router.get("/home/image.jpeg", express.static("public"));


export default router;
