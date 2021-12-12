import { Request, Response } from "express";
import { OrdersDay } from "../../entities/OrdersDay";
import { IntegrationUseCases } from "../Integration/IntegrationUseCases";
import { CreateOrdersDayUseCase } from "./CreateOrdersDayUseCase"

export class CreateOrdersDayController{

    constructor(
        private CreateOrdersDayUseCases: CreateOrdersDayUseCase,
        private IntegrationUseCases: IntegrationUseCases
    ){}


    async handle(request: Request, response: Response): Promise<any>{
       try {
            const data = await this.IntegrationUseCases.integration();
            const results = await this.CreateOrdersDayUseCases.execute(data)

            return response.status(200).json(results);
       }catch(err){
           console.log(err)
       }

    }
}