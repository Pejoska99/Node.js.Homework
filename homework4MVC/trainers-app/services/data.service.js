import fs from 'fs/promises';

export default class DataService {
    static async readData(filePath) {
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error(`Failed to read data from ${filePath}: ${error.message}`);
        }
    }

    static async saveData(filePath, data) {
        try {
            await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        } catch (error) {
            throw new Error(`Failed to save data to ${filePath}: ${error.message}`);
        }
    }
}


