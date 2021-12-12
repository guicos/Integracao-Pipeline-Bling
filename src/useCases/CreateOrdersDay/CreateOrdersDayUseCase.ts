import { OrdersDay } from "../../entities/OrdersDay";
import { IOrdersDayRepository } from "../../repositories/IOrdersDayRepository";
import { ICreateOrdersDayDTO } from "./CreateOrdersDayDTO";

export class CreateOrdersDayUseCase {
    constructor(
        private ordersDayRepository: IOrdersDayRepository
    ){}

    async execute(data: ICreateOrdersDayDTO): Promise<ICreateOrdersDayDTO>{
        
        for(let i of data){
            const orders = new OrdersDay(i);
            const ordersExists = await this.ordersDayRepository.searchOne(orders);
            if(!ordersExists.length){
                await this.ordersDayRepository.save(orders);
            }
        }
        const searchAll = await this.ordersDayRepository.searchAll();
        
        for(let i of searchAll){
            await this.ordersDayRepository.saveOrdesDay(i);
        }

        let results = this.ordersDayRepository.getOrdersDay();

        return results
    }

    
}