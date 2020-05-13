import * as express from 'express';
import { DemoController } from '../controllers/demo.controller';
import * as asyncHandler from 'express-async-handler'
export class DemoRoutes {
    router: express.Router;
    controller: DemoController;
    constructor() {
        this.router = express.Router();
        this.controller = new DemoController();
    }
    get routes() {
        this.router.get('/', asyncHandler(this.controller.getRecord));
        this.router.post('/', asyncHandler(this.controller.createRecord));
        this.router.put('/', asyncHandler(this.controller.updateRecord));
        this.router.delete('/:id', asyncHandler(this.controller.deleteRecord));
        return this.router;
    }
}