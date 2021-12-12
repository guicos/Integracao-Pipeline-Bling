import { Schema, model, connect} from "mongoose";
import { InterfaceMongo } from "./InterfaceMongo";

        const ordersDaySchema: Schema = new Schema<InterfaceMongo>({
            date: { type: String, require: true},
            amount: { type: Number, require: true},
            qtt_ordered: { type: Number, required: true}
        })

        export const OrdersDayModel = model<InterfaceMongo>('OrdersDay', ordersDaySchema);
