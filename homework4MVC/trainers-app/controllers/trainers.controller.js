import TrainersService from '../services/trainers.service.js';
import TrainerModel from '../models/trainers.model.js';

export default class TrainerController {
    static async getTrainers(req, res) {
        
        const queryData = req.query;
        try {
            const trainers = await TrainersService.getTrainers(queryData);
            res.json(trainers);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }


    static async addTrainer(req, res) {
        try {
            const newTrainer = await TrainersService.addTrainer(req.body);
            res.status(201).json(newTrainer);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

     static async getTrainerById(req, res) {
        const trainerId = req.params.id;
        try {
            const trainer = await TrainersService.getTrainerById(trainerId);
            if (!trainer) {
                res.status(404).send('Trainer not found');
                return;
            }
            res.json(trainer);
        } catch (error) {
            res.status(500).send(error.message);
        }
     }

    //  static async updateTrainer(req, res) {
    //     const trainerId = req.params.id;
    //     try {
    //         const trainer = await TrainersModel.updateTrainer(trainerId, req.body);
    //         res.json(updatedTrainer);
    //     } catch (error) {
    //         res.status(404).send(error.message);
    //     }
    //  }

    static async updateTrainer(req,res){
        const trainerId = req.params.id;
        try{
            const trainer = await TrainerModel.getTrainerById(trainerId);
            if(!trainer){
                res.status(404).send('Trainer not found');
                return;
            }

            trainer.setName(req.body.name);
            trainer.setAge(req.body.age);

            await TrainerModel.updateTrainer(trainerId,{
                name:req.body.name,
                age:   req.body.age,

            });
            res.json(trainer);
        }catch(error){
            res.status(500).send(error.message);
        }
    }
      static async updateTrainerCoursesFinished(req, res) {
        const trainerId = req.params.id;
        const coursesFinished = req.body.coursesFinished;
        try {
            const updatedTrainer = await TrainersService.updateTrainerCoursesFinished(trainerId, coursesFinished);
            res.json(updatedTrainer);
        } catch (error) {
            res.status(404).send(error.message);
        }
     }

     static async deleteTrainer(req, res) {
        const trainerId = req.params.id;
        try {
            await TrainersService.deleteTrainer(trainerId);
            res.sendStatus(204);
        } catch (error) {
            res.status(404).send(error.message);
        }
     }

     static async deleteAllTrainers(req, res) {
        try {
            await TrainersService.deleteAllTrainers();
            res.sendStatus(204);
        } catch (error) {
            res.status(500).send(error.message);
        }
     }



    }
