import TrainerService from '../services/trainers.service.js';
import  {Trainer} from '../models/trainers.model.js';



export default class TrainerController {

 

  static async getAllTrainers(req, res) {
    try {
        const queryData = req.query; 
        const trainers = await TrainerService.getAllTrainers(queryData); // Променете го овој ред
        console.log("Trainers:", trainers);
        res.json(trainers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



 static  async getTrainerById(req, res) {
    const id = req.params.id;
    try {
      const trainer = await TrainerService.getTrainerById(id);
      if (!trainer) {
        return res.status(404).json({ message: 'Trainer not found' });
      }
      res.json(trainer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addTrainer(req, res) {
    try {
      const newTrainer = await TrainerService.addTrainer(req.body);
      const trainer = new Trainer(newTrainer); 
      res.status(201).json(trainer); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  static async updateTrainer(req, res) {
    const id = req.params.id;
    const updatedTrainerData = req.body;
    try {
      await TrainerService.updateTrainer(id, updatedTrainerData);
      const updatedTrainer = new Trainer(updatedTrainerData); 
      res.json(updatedTrainer); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateTrainerCoursesFinished(req, res) {
    
    const id = req.params.id;
    const coursesFinished = req.body.coursesFinished;
    try {
      const updatedTrainer = await TrainerService.updateTrainerCoursesFinished(id, coursesFinished);
      res.json(updatedTrainer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  static async deleteTrainer(req, res) {
    const id = req.params.id;
    try {
      await TrainerService.deleteTrainer(id);
      res.json({ message: 'Trainer deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteAllTrainers(req, res) {
    try {
      await TrainerService.deleteAllTrainers();
      res.json({ message: 'All trainers deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}
