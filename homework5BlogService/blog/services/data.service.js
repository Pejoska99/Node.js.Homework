import fs from 'fs/promises';

export default class DataService {
    static async readData(path) {
        const arr = await fs.readFile(path, 'utf-8');
        return JSON.parse(arr);
    }

    static async writeData(path,data = []) {
        await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8');
    }

}