
import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";


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
    static async getAllTrainers() {
        console.log("Getting all trainers from model");

        return await DataService.readData(trainersPath);
    }

    static async getTrainerById(trainerId) {
        const trainers = await this.getAllTrainers();
        return trainers.find(trainer => trainer.id === trainerId);
    }

    static async addTrainer(body) {
        const trainers = await this.getAllTrainers();
        const newTrainer = { 
            ...body,
             id: uuidv4() };
             
        trainers.push(newTrainer);
        await DataService.saveData(trainersPath, trainers);
        return newTrainer;
    }

    static async updateTrainer(trainerId, trainerData) {
        const trainers = await this.getAllTrainers();
        const index = trainers.findIndex(trainer => trainer.id === trainerId);
        if (index === -1) {
            throw new Error("Trainer not found");
        }
        trainers[index] = { ...trainers[index], ...trainerData };
        await DataService.saveData(trainersPath, trainers);
        return trainers[index];
    }

    static async updateTrainerCoursesFinished(trainerId, coursesFinished) {
        const trainers = await this.getAllTrainers();
        const index = trainers.findIndex(trainer => trainer.id === trainerId);
        if (index === -1) {
            throw new Error("Trainer not found");
        }
        trainers[index].coursesFinished = coursesFinished;
        await DataService.saveData(trainersPath, trainers);
        return trainers[index];
    }
    

    static async deleteTrainer(trainerId) {
        const trainers = await this.getAllTrainers();
        const filteredTrainers = trainers.filter(trainer => trainer.id !== trainerId);
        await DataService.saveData(trainersPath, filteredTrainers);
    }

    static async deleteAllTrainers() {
        await DataService.saveData(trainersPath, []);
    }
}
export class Trainer {
    constructor(newTrainerData) {
      this.id = newTrainerData.id || uuidv4();
      this.firstName = newTrainerData.firstName;
      this.lastName = newTrainerData.lastName;
      this.email = newTrainerData.email;
      this.isCurrentlyTeaching = newTrainerData.isCurrentlyTeaching;
      this.timeEmployed = newTrainerData.timeEmployed;
      this.coursesFinished = newTrainerData.coursesFinished;
    }
  }
  
