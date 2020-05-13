import { NextFunction, Response, Request } from "express";
import { DemoRepository } from '../repositories/demo.repository'

export class DemoController {
    demoRepository: DemoRepository;
    constructor() {
        this.demoRepository = new DemoRepository();
    }

    getRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.demoRepository.getRecord();
        response.send('Get Response');
    }

    createRecord = async (request: Request, response: Response, next: NextFunction) => {
        response.json(request.body);
    }

    updateRecord = async (request: Request, response: Response, next: NextFunction) => {
        response.json(request.body);
    }

    deleteRecord = async (request: Request, response: Response, next: NextFunction) => {
        response.send(request.params.id + ' deleted successfully');
    }
}