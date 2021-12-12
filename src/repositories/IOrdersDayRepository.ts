import { OrdersDay } from "../entities/OrdersDay";

export interface IOrdersDayRepository {
    searchAll():Promise<OrdersDay>;
    save(orders: OrdersDay): Promise<void>;
    searchOne(orders: OrdersDay):Promise<OrdersDay>;
    saveOrdesDay(orders: OrdersDay): Promise<void>;
    getOrdersDay(): Promise<OrdersDay>;
}