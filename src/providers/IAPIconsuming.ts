import { MainDataIntegration } from "../entities/MainDataIntegration";
import { OrdersDay } from "../entities/OrdersDay";

export interface IAPIcosuming{
    getDataBusiness():Promise<MainDataIntegration>
    postDataOrders(data: MainDataIntegration): Promise<void>
    getOrders():Promise<OrdersDay>
}