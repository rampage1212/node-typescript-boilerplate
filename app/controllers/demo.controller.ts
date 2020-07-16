import { NextFunction, Response, Request } from "express";
import { DemoRepository } from '../repositories/demo.repository'
import { CumtomResponse } from "../config/response";

export class DemoController {
    demoRepository: DemoRepository;
    constructor() {
        this.demoRepository = new DemoRepository();
    }

    getError = async (request: Request, response: Response, next: NextFunction) => {
        throw CumtomResponse.badRequest({}, 'Error');
    }

    getRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.demoRepository.getRecord();
        response.send('Get Response');
    }

    createRecord = async (request: Request, response: Response, next: NextFunction) => {
        response.json(CumtomResponse.success(request.body));
    }

    updateRecord = async (request: Request, response: Response, next: NextFunction) => {
        response.json(CumtomResponse.success(request.body));
    }

    deleteRecord = async (request: Request, response: Response, next: NextFunction) => {
        response.json(CumtomResponse.success({}, request.params.id + ' deleted successfully'));
    }
}