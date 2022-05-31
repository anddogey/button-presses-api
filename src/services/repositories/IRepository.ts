export type DataStore<T> = {
    [key: string]: {
        [key: string]: T;
    };
};
export interface IRepository<T> {
    get: () => DataStore<T>;
    getById: (tableName: string, id: string) => T;
    update: (tableName: string, id: string, data: T) => void;
    insert: (tableName: string, data: T) => void;
}
