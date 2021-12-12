import { request, response, Router } from "express";
import { CreateOrderDayController } from "./useCases/CreateOrdersDay";


const router = Router()

router.get('/data', (request, response) =>{
    return CreateOrderDayController.handle(request, response);
})

export { router }