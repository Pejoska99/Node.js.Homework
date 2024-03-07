import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const trainersPath = path.join(projectPath, "..", "trainers.json");

export const getTrainers= () => {

    const trainers = fs.readFileSync(trainersPath, 'utf8');
    return JSON.parse(trainers);


}
