import { MainDataIntegration } from '../../entities/MainDataIntegration';
import { IAPIcosuming } from '../../providers/IAPIconsuming';
import { IInterfaceIntegrationDTO } from './InterfaceIntegrationDTO';


export class IntegrationUseCases {
    constructor(
        private consumingData: IAPIcosuming,
    ){}

    async integration(): Promise<IInterfaceIntegrationDTO>{
        const date = await this.consumingData.getDataBusiness();
        for(let data of date){
            let main = new MainDataIntegration(data)
            await this.consumingData.postDataOrders(main);
        };
        
        const results = await this.consumingData.getOrders();

        return results;
    }
}