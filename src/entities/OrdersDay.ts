export class OrdersDay {
    public readonly id: string;

    public qtt_ordered: number;
    public amount: number;
    public date: string;
    public number_orders: number;
    [Symbol.iterator]

    constructor(props: Omit<OrdersDay, 'id'>, id?: string){
        Object.assign(this, props);
    }
}