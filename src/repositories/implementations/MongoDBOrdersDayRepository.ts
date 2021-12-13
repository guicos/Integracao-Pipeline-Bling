import 'dotenv/config';
import { OrdersDay } from "../../entities/OrdersDay";
import { IOrdersDayRepository } from "../IOrdersDayRepository";
import { Schema, model, connect, disconnect} from "mongoose";
import { InterfaceMongo } from "./InterfaceMongo";
import { OrdersModel } from "./OrdersModel";
import { OrdersDayModel } from "./OrdersDayModel";


export class MongoDBOrdersDayRepository implements IOrdersDayRepository{

    async searchAll(): Promise<any>{
        try{
            let result = [];
            let listAmount = []
            await connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.cblz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
            const OrdersModel = model<InterfaceMongo>('Orders');
            const date = new Date().toLocaleDateString().split('/').reverse().join().replace(/,/g, "-")
            const search = await OrdersModel.find({date: date}).exec();

            for(let i = 0 ; i < search.length; i++){
                listAmount.push(search[i].amount)
                result.push({
                    date: search[i].date,
                    amount: listAmount.reduce((a, b) => a + b),
                    qtt_ordered: search.length
                })
            }

            await disconnect();
            return result
        }catch(err){
            console.log(err)
        }
    }

    async saveOrdesDay(orders: OrdersDay): Promise<void>{
        await connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.cblz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        const OrdersModel = model<InterfaceMongo>('OrdersDay');
        const result = await OrdersModel.find({date: orders.date});
        const newOrders = new OrdersDayModel({
            date: orders.date,
            amount: orders.amount,
            qtt_ordered: orders.qtt_ordered
        })
        const id = result.filter(element => element.id)
        if(!result.length){
            await newOrders.save()
        }else{
            await OrdersModel.updateOne(id, {
                date: orders.date,
                amount: orders.amount,
                qtt_ordered: orders.qtt_ordered
            });
        }

        await disconnect();
    }

    async searchOne(orders: OrdersDay): Promise<any>{
        try{
            await connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.cblz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
            const OrdersModel = model<InterfaceMongo>('Orders');
            let result = await OrdersModel.find({number_orders: orders.number_orders}).exec();

            await disconnect();
            return result
        }catch(err){
            console.log(err)
        }
    }

    async save(orders: OrdersDay): Promise<void>{
        await connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.cblz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

        const newOrders = new OrdersModel({
            date: orders.date,
            amount: orders.amount,
            number_orders: orders.number_orders
        })
        await newOrders.save()
        await disconnect();
    }

    async getOrdersDay(): Promise<any>{
        try{
            await connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.cblz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
            const OrdersModel = model<InterfaceMongo>('OrdersDay');
            let result = await OrdersModel.find({});

            await disconnect();
            return result
        }catch(err){
            console.log(err)
        }
    }
}