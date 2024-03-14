import express, { response } from "express";
import {
    getTrainers,
    addTrainer,
    getTrainerById,
    updateTrainer,
    deleteTrainer,
    deleteAllTrainers,
} from "../service/trainers.service.js";

const router = express.Router();

router.get("/trainers", (req, res) => {
    const queryData = req.query;
    try {
        const trainers = getTrainers(queryData);
        res.send(trainers);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post("/trainers", (req, res) => {
    try {
        const newTrainer = addTrainer(req.body);
        res.status(201).json(newTrainer);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/trainers/:id", (req, res) => {
    const trainerId = req.params.id;
    try {
        const trainer = getTrainerById(trainerId);
        res.json(trainer);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put("/trainers/:id", (req, res) => {
    const trainerId = req.params.id;
    try {
        const updatedTrainer = updateTrainer(trainerId, req.body);
        res.json(updatedTrainer);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete("/trainers/:id", (req, res) => {
    const trainerId = req.params.id;
    try {
        deleteTrainer(trainerId);
        res.sendStatus(204);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete("/trainers", (req, res) => {
    try{
        deleteAllTrainers();
        res.sendStatus(204);
    }catch {
        res.status(500).send(error.message);
    }
});

router.patch("/trainers/:id", (req, res) => {
    const trainerId = req.params.id;
    try {
        const updatedTrainer = updateTrainer(trainerId, req.body);
        res.json(updatedTrainer);
    } catch (error) {
        res.status(404).send(error.message);
    }
});


export { router };
