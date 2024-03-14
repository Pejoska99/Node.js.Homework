// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const currentFileUrl = import.meta.url;
// const currentFilePath = fileURLToPath(currentFileUrl);
// const projectPath = path.dirname(currentFilePath);

// const trainersPath = path.join(projectPath, "..", "trainers.json");

// export const getTrainers= () => {

//     const trainers = fs.readFileSync(trainersPath, 'utf8');
//     return JSON.parse(trainers);


// }



import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from "uuid";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const trainersPath = path.join(projectPath, "..", "trainers.json");

export const getTrainers = (queryData) => {
    const trainers = JSON.parse(fs.readFileSync(trainersPath, 'utf8'));

    if (!queryData) {
        return trainers;
    }

    let updatedTrainers = [...trainers];

    if (queryData.isCurrentlyTeaching !== undefined) {
        updatedTrainers = updatedTrainers.filter(trainer => trainer.isCurrentlyTeaching === queryData.isCurrentlyTeaching);
    }

    if (queryData.coursesFinished !== undefined) {
        updatedTrainers = updatedTrainers.filter(trainer => trainer.coursesFinished === queryData.coursesFinished);
    }

    return updatedTrainers;
}

const saveTrainersData = (trainers) => {
    fs.writeFileSync(trainersPath, JSON.stringify(trainers, null, 2), 'utf8');
}

export const addTrainer = (newTrainerData) => {
    const trainers = getTrainers();
    const newTrainer = {
        id: uuidv4(),
        ...newTrainerData,
    };
    const updatedTrainers = [...trainers, newTrainer];
    saveTrainersData(updatedTrainers);
    return newTrainer;
}

export const getTrainerById = (trainerId) => {
    const trainers = getTrainers();
    return trainers.find(trainer => trainer.id === trainerId);
}

export const updateTrainer = (trainerId, trainerData) => {
    const trainers = getTrainers();
    const index = trainers.findIndex(trainer => trainer.id === trainerId);
    if (index === -1) {
        throw new Error("Trainer not found");
    }
    trainers[index] = { ...trainers[index], ...trainerData };
    saveTrainersData(trainers);
    return trainers[index];
}

export const deleteTrainer = (trainerId) => {
    const trainers = getTrainers();
    const filteredTrainers = trainers.filter(trainer => trainer.id !== trainerId);
    saveTrainersData(filteredTrainers);
}

export const deleteAllTrainers = () => {
    fs.writeFileSync(trainersPath, '[]', 'utf8');
}





