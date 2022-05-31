import { ButtonDataModel, ButtonsRepository } from '../repositories/ButtonsRepository';

type ButtonsServiceDependencies = {
    buttonsRepository: ButtonsRepository;
};
export class ButtonsService {
    private buttonsRepository: ButtonsRepository;
    constructor(dependencies: ButtonsServiceDependencies) {
        this.buttonsRepository = dependencies.buttonsRepository;
    }
    getButtonPresses(id: string) {
        return this.buttonsRepository.getButtonById(id).numberOfPresses;
    }
    saveButtonPresses(data: ButtonDataModel, id: string) {
        this.buttonsRepository.updateButton(data, id);
    }
}
