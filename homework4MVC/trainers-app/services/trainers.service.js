import TrainerModel from "../models/trainers.model.js";
import { v4 as uuidv4 } from "uuid";


export default class TrainersService {
    static async getTrainers(queryData) {
        let trainers = await TrainerModel.getTrainers();

        if (queryData) {
            if (queryData.isCurrentlyTeaching === 'true') {
                trainers = trainers.filter(trainer => trainer.isCurrentlyTeaching === true);
            }
            if (queryData.sortBy === 'coursesAsc') {
                trainers = trainers.sort((a, b) => a.coursesFinished - b.coursesFinished);
            }
        }

        return trainers;
    }

    static async addTrainer(newTrainerData) {
        const trainer  = {
            id: uuidv4(),
            ...newTrainerData,
            createdAt: new Date().toISOString()
        }
        return await TrainerModel.addTrainer(trainer);
        
            

        }
    static async getTrainerById(trainerId) {
        const trainer = await TrainerModel.getTrainerById(trainerId);
        if (!trainer) {
            throw new Error("Trainer not found");
        }
        return trainer;
    }

    static async updateTrainer(trainerId, body) {
        const trainer = await TrainerModel.getTrainerById(trainerId);
        if (!trainer) {
            throw new Error("Trainer not found");
        }
        
        const updatedTrainer = {
            ...body,
            id:trainerId,
            updatedAt: new Date().toISOString()
        };
        
        return await TrainerModel.updateTrainer(trainerId, updatedTrainer);
    }
    


    static async updateTrainerCoursesFinished(trainerId, coursesFinished) {
        const trainer = await TrainerModel.getTrainerById(trainerId);
        if (!trainer) {
            throw new Error(`Trainer with ID ${trainerId} not found.`);
        }

        const updatedTrainer = {
            ...trainer,
            coursesFinished,
           
            updatedAt: new Date().toISOString()
        };

        return await TrainerModel.updateTrainer(trainerId, updatedTrainer);
    }


    static async deleteTrainer(trainerId) {
        await TrainerModel.deleteTrainer(trainerId);
    }

    static async deleteAllTrainers() {
        await TrainerModel.deleteAllTrainers();
    }

    
}
