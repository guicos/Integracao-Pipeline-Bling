import { Schema, model, connect} from "mongoose";
import { InterfaceMongo } from "./InterfaceMongo";

        const ordersDaySchema: Schema = new Schema<InterfaceMongo>({
            date: { type: String, require: true},
            amount: { type: Number, require: true},
            number_orders: { type: Number, required: true}
        })

        export const OrdersModel = model<InterfaceMongo>('Orders', ordersDaySchema);
