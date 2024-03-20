import TrainerService from '../services/trainers.service.js';
import {Trainer} from '../models/trainers.model.js';

const trainerService = new TrainerService();

export default class TrainerController {
  async getAllTrainers(req, res) {
    try {
      const trainers = await trainerService.getAllTrainers();
      console.log("Trainers:", trainers);
      res.json(trainers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTrainerById(req, res) {
    const id = req.params.id;
    try {
      const trainer = await trainerService.getTrainerById(id);
      if (!trainer) {
        return res.status(404).json({ message: 'Trainer not found' });
      }
      res.json(trainer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async addTrainer(req, res) {
    try {
      const newTrainer = await trainerService.addTrainer(req.body);
      const trainer = new Trainer(newTrainer); 
      res.status(201).json(trainer); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  async updateTrainer(req, res) {
    const id = req.params.id;
    const updatedTrainerData = req.body;
    try {
      await trainerService.updateTrainer(id, updatedTrainerData);
      const updatedTrainer = new Trainer(updatedTrainerData); 
      res.json(updatedTrainer); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteTrainer(req, res) {
    const id = req.params.id;
    try {
      await trainerService.deleteTrainer(id);
      res.json({ message: 'Trainer deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteAllTrainers(req, res) {
    try {
      await trainerService.deleteAllTrainers();
      res.json({ message: 'All trainers deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
