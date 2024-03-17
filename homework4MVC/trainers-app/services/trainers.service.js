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
        return await TrainerModel.addTrainer(newTrainerData);
    }

    static async getTrainerById(trainerId) {
        return await TrainerModel.getTrainerById(trainerId);
    }

    static async updateTrainer(trainerId, trainerData) {
        return await TrainerModel.updateTrainer(trainerId, trainerData);
    }

    static async updateTrainerCoursesFinished(trainerId, coursesFinished) {
        return await TrainerModel.updateTrainerCoursesFinished(trainerId, coursesFinished);

    }

    static async deleteTrainer(trainerId) {
        await TrainerModel.deleteTrainer(trainerId);
    }

    static async deleteAllTrainers() {
        await TrainerModel.deleteAllTrainers();
    }
}
