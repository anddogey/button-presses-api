import { FileRepository } from './FileRepository';

export type ButtonDataModel = {
    numberOfPresses: number;
};
export class ButtonsRepository extends FileRepository<ButtonDataModel> {
    getButtonById(id: string) {
        return this.getById('buttons', id);
    }
    insertButton(data: ButtonDataModel) {
        this.insert('buttons', data);
    }
    updateButton(data: ButtonDataModel, id: string) {
        this.update('buttons', id, data);
    }
}
