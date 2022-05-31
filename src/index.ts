import { APIHub } from './services/api/APIHub';
import { ButtonsService } from './services/core/ButtonsService';
import { ButtonsRepository } from './services/repositories/ButtonsRepository';

const apiHub = new APIHub({
    buttonsService: new ButtonsService({
        buttonsRepository: new ButtonsRepository(),
    }),
});
apiHub.start();
