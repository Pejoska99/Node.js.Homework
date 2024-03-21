import TrainerModel from "../models/trainers.model.js";
import { Trainer } from "../models/trainers.model.js";

export default class TrainerService {

    static async getAllTrainers(queryData) {
        console.log("Getting all trainers from service...");
        let trainers = await TrainerModel.getAllTrainers();

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

    static async addTrainer(trainerData) {
        
        const newTrainer = new Trainer(trainerData);
        await TrainerModel.addTrainer(newTrainer);
        return newTrainer;
    }

    static async getTrainerById(trainerId) {
        const trainer = await TrainerModel.getTrainerById(trainerId);
        if (!trainer) {
            throw new Error("Trainer not found");
        }
        return trainer;
    }

    // static async updateTrainer(trainerId, body) {

    //     const updatedTrainer = new Trainer(body);
    //     updatedTrainer.id = trainerId; 
    //     updatedTrainer.updatedAt = new Date().toISOString();

    //     await TrainerModel.updateTrainer(trainerId, updatedTrainer);
    //     return updatedTrainer;
    // }

    static async updateTrainer(trainerId, body) {
        const updatedTrainerData = {
            ...body,
            updatedAt: new Date().toISOString()
        }
        const updatedTrainer = new Trainer(updatedTrainerData);
        updatedTrainer.id = trainerId;

        await TrainerModel.updateTrainer(trainerId, updatedTrainerData);
        return updatedTrainer;


        
    }

    static async updateTrainerCoursesFinished(trainerId, coursesFinished) {
        const trainer = await TrainerModel.getTrainerById(trainerId);
        if (!trainer) {
            throw new Error(`Trainer with ID ${trainerId} not found.`);
        }
    
        const updatedTrainerData = {
            ...trainer,
            coursesFinished,
            updatedAt: new Date().toISOString()
        };
    
        const updatedTrainer = new Trainer(updatedTrainerData);
    
        await TrainerModel.updateTrainer(trainerId, updatedTrainerData);
        return updatedTrainer;
    }
    

    static async deleteTrainer(trainerId) {
        await TrainerModel.deleteTrainer(trainerId);
    }

    static async deleteAllTrainers() {
        await TrainerModel.deleteAllTrainers();
    }
}
