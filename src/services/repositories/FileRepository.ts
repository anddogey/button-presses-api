import { DataStore, IRepository } from './IRepository';
import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
export class FileRepository<T> implements IRepository<T> {
    get() {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '../../..', 'data.json')).toString()) as DataStore<T>;
    }
    getById(tableName: string, id: string) {
        return this.get()[tableName][id];
    }
    update(tableName: string, id: string, data: T) {
        const existingData = this.get();
        existingData[tableName][id] = data;
        fs.writeFileSync(path.join(__dirname, '../../..', 'data.json'), JSON.stringify(existingData));
    }
    insert(tableName: string, data: T) {
        const existingData = this.get();
        existingData[tableName][uuid()] = data;
        fs.writeFileSync(path.join(__dirname, '../../..', 'data.json'), JSON.stringify(existingData));
    }
}
