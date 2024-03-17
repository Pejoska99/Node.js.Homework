import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl); 
const filePathDirectory = path.dirname(currentFilePath); 
const trainersPath = path.join(
  filePathDirectory,
  "..",
  "data",
  "trainers.json"
);

export default class TrainerModel {
    static async getTrainers() {
        return await DataService.readData(trainersPath);
    }

    static async getTrainerById(trainerId) {
        const trainers = await this.getTrainers();
        return trainers.find(trainer => trainer.id === trainerId);
    }

    static async addTrainer(body) {
        const trainers = await this.getTrainers();
        const newTrainer = { ...body, id: uuidv4() };
        trainers.push(newTrainer);
        await DataService.saveData(trainersPath, trainers);
        return newTrainer;
    }

    static async updateTrainer(trainerId, trainerData) {
        const trainers = await this.getTrainers();
        const index = trainers.findIndex(trainer => trainer.id === trainerId);
        if (index === -1) {
            throw new Error("Trainer not found");
        }
        trainers[index] = { ...trainers[index], ...trainerData };
        await DataService.saveData(trainersPath, trainers);
        return trainers[index];
    }

    static async updateTrainerCoursesFinished(trainerId, coursesFinished) {
        const trainers = await this.getTrainers();
        const index = trainers.findIndex(trainer => trainer.id === trainerId);
        if (index === -1) {
            throw new Error("Trainer not found");
        }
        trainers[index].coursesFinished = coursesFinished;
        await DataService.saveData(trainersPath, trainers);
        return trainers[index];
    }
    

    static async deleteTrainer(trainerId) {
        const trainers = await this.getTrainers();
        const filteredTrainers = trainers.filter(trainer => trainer.id !== trainerId);
        await DataService.saveData(trainersPath, filteredTrainers);
    }

    static async deleteAllTrainers() {
        await DataService.saveData(trainersPath, []);
    }
}

//     static async addTrainer(newTrainerData) {
//         const trainers = await this.getTrainers();
//         const newTrainer = {
//             ...newTrainerData,
//             id: uuidv4(),
//         };
//         const updatedTrainers = [...trainers, newTrainer];
//         await DataService.saveData(trainersPath, updatedTrainers);
//         return newTrainer;
//     }

//     static async getTrainerById(trainerId) {
//         const trainers = await this.getTrainers();
//         return trainers.find(trainer => trainer.id === trainerId);
//     }

//     static async updateTrainer(trainerId, trainerData) {
//         const trainers = await this.getTrainers();
//         const index = trainers.findIndex(trainer => trainer.id === trainerId);
//         if (index === -1) {
//             throw new Error("Trainer not found");
//         }
//         trainers[index] = { ...trainers[index], ...trainerData };
//         await DataService.saveData(trainersPath, trainers);
//         return trainers[index];
//     }
    

//     static async deleteTrainer(trainerId) {
//         const trainers = await this.getTrainers();
//         const filteredTrainers = trainers.filter(trainer => trainer.id !== trainerId);
//         await DataService.saveData(trainersPath, filteredTrainers);
//     }

//     static async deleteAllTrainers() {
//         await DataService.saveData(trainersPath, []);
//     }
// }
