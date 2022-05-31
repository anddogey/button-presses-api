import express from 'express';
import { ButtonsService } from '../core/ButtonsService';
type APIHubDependencies = {
    buttonsService: ButtonsService;
};
export class APIHub {
    private buttonsService: ButtonsService;
    constructor(dependencies: APIHubDependencies) {
        this.buttonsService = dependencies.buttonsService;
    }
    start() {
        const app = express();
        const port = 3000;
        app.use(express.json());
        app.get('/buttons/:buttonid', (req, res) => {
            const buttonPresses = this.buttonsService.getButtonPresses(req.params.buttonid);
            res.status(200).json(buttonPresses);
        });

        app.put('/buttons/:buttonid', (req, res) => {
            this.buttonsService.saveButtonPresses({ numberOfPresses: req.body.numberOfPresses }, req.params.buttonid);
            res.status(200).json({});
        });

        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    }
}
