export class MainDataIntegration {
    public readonly id: string;

    public name: string;
    public service: string;
    public describe: string;
    public qtt: string;
    public value_once: string;
    public value: string;
    public date: string;
    [Symbol.iterator]

    constructor(props: Omit<MainDataIntegration, 'id'>, id?: string){
        Object.assign(this, props);
    }
}